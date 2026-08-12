/**
 * Per-instance sliding-window rate limiter for POST /api/chat.
 *
 * This is the in-code layer only. Serverless instances are ephemeral and a
 * project can run several at once, so this Map is NOT the production
 * guarantee: the cross-instance limit is a Vercel WAF rate-limit rule on
 * /api/chat (see README). This layer still does real work — it blocks the
 * common case of one client hammering a warm instance, it costs nothing, and
 * it works in local dev and preview where no WAF rule applies.
 *
 * No external store, no dependencies.
 */

// Ordered shortest window first. Burst allows a normal visit (several
// questions in a row); sustained stops a slow drip over a long session.
const WINDOWS = [
  { ms: 60_000, max: 10 },
  { ms: 60 * 60_000, max: 40 },
];

const LONGEST_WINDOW = WINDOWS[WINDOWS.length - 1].ms;
const SWEEP_INTERVAL = 60_000;
const MAX_TRACKED_CLIENTS = 5000;

/** key -> ascending request timestamps within the longest window */
const hits = new Map();
let lastSweep = 0;

/** Drops expired entries so the Map cannot grow without bound. */
function sweep(now) {
  if (now - lastSweep < SWEEP_INTERVAL && hits.size < MAX_TRACKED_CLIENTS) {
    return;
  }
  lastSweep = now;

  for (const [key, timestamps] of hits) {
    const kept = timestamps.filter((t) => now - t < LONGEST_WINDOW);
    if (kept.length === 0) hits.delete(key);
    else if (kept.length !== timestamps.length) hits.set(key, kept);
  }

  // Hard cap as a memory backstop: evict the least recently active clients.
  if (hits.size > MAX_TRACKED_CLIENTS) {
    const byLastSeen = [...hits.entries()].sort(
      (a, b) => a[1][a[1].length - 1] - b[1][b[1].length - 1],
    );
    for (const [key] of byLastSeen.slice(0, hits.size - MAX_TRACKED_CLIENTS)) {
      hits.delete(key);
    }
  }
}

/**
 * Identifies the caller. Vercel sets x-forwarded-for at the edge; the first
 * entry is the client. Callers we cannot identify share one bucket, which is
 * deliberately conservative.
 */
export function clientKey(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}

/**
 * Records a request and reports whether it is allowed.
 * Rejected requests are not recorded, so a client that keeps retrying cannot
 * extend its own lockout indefinitely.
 *
 * @returns {{allowed: boolean, retryAfter: number}} retryAfter is in seconds.
 */
export function checkRateLimit(key, now = Date.now()) {
  sweep(now);

  const timestamps = (hits.get(key) ?? []).filter(
    (t) => now - t < LONGEST_WINDOW,
  );

  for (const window of WINDOWS) {
    const inWindow = timestamps.filter((t) => now - t < window.ms);
    if (inWindow.length >= window.max) {
      hits.set(key, timestamps);
      const msUntilFree = window.ms - (now - inWindow[0]);
      return { allowed: false, retryAfter: Math.max(1, Math.ceil(msUntilFree / 1000)) };
    }
  }

  timestamps.push(now);
  hits.set(key, timestamps);
  return { allowed: true, retryAfter: 0 };
}
