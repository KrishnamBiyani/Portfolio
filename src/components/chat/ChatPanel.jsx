import { useCallback, useEffect, useRef, useState } from "react";
import { profile, featuredProjects } from "../../data/portfolio.js";

const firstName = profile.name.split(" ")[0];

const SUGGESTIONS = [
  `Tell me about ${featuredProjects[0].name}`,
  "What backend experience does he have?",
  "What did he build with RabbitMQ?",
];

const GENERIC_ERROR = "Something went wrong. Please try again.";
const EMPTY_ERROR = "No response received. Please try again.";

export default function ChatPanel({ open, onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const inputRef = useRef(null);
  const logRef = useRef(null);
  const abortRef = useRef(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // Abort any in-flight request when the panel unmounts.
  useEffect(() => () => abortRef.current?.abort(), []);

  useEffect(() => {
    const log = logRef.current;
    if (log) log.scrollTop = log.scrollHeight;
  }, [messages, pending, error]);

  const send = useCallback(
    async (text) => {
      const question = text.trim();
      if (!question || pending) return;

      const history = [...messages, { role: "user", content: question }];
      setMessages(history);
      setInput("");
      setError(null);
      setPending(true);

      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: history }),
          signal: controller.signal,
        });

        if (!response.ok) {
          // Only surface the body when it is one of our own short plain-text
          // messages, so platform error pages never reach the user.
          const contentType = response.headers.get("content-type") || "";
          const detail = contentType.startsWith("text/plain")
            ? (await response.text().catch(() => "")).trim()
            : "";
          throw new Error(
            detail && detail.length <= 160 ? detail : GENERIC_ERROR,
          );
        }

        setMessages((current) => [...current, { role: "assistant", content: "" }]);

        let received = "";
        const append = (chunk) => {
          if (!chunk) return;
          received += chunk;
          setMessages((current) => {
            const next = current.slice();
            const last = next[next.length - 1];
            next[next.length - 1] = { ...last, content: last.content + chunk };
            return next;
          });
        };

        if (response.body) {
          const reader = response.body.getReader();
          const decoder = new TextDecoder();
          for (;;) {
            const { done, value } = await reader.read();
            if (done) break;
            append(decoder.decode(value, { stream: true }));
          }
          append(decoder.decode());
        } else {
          append(await response.text());
        }

        // An empty stream is a failure, not an answer: never invent one.
        if (!received.trim()) {
          setMessages((current) =>
            current[current.length - 1]?.role === "assistant" &&
            !current[current.length - 1].content
              ? current.slice(0, -1)
              : current,
          );
          setError(EMPTY_ERROR);
        }
      } catch (requestError) {
        if (requestError.name === "AbortError") return;
        setMessages((current) =>
          current[current.length - 1]?.role === "assistant" &&
          !current[current.length - 1].content
            ? current.slice(0, -1)
            : current,
        );
        setError(requestError.message || GENERIC_ERROR);
      } finally {
        abortRef.current = null;
        setPending(false);
      }
    },
    [messages, pending],
  );

  const onSubmit = (event) => {
    event.preventDefault();
    send(input);
  };

  return (
    <div
      role="dialog"
      aria-label={`Ask about ${profile.name}`}
      aria-hidden={!open}
      className={`fixed inset-x-3 bottom-3 z-50 h-[70vh] max-h-[520px] flex-col overflow-hidden rounded-xl border border-line bg-[#0d0d0d]/95 backdrop-blur-xl sm:inset-x-auto sm:bottom-6 sm:right-6 sm:h-[460px] sm:w-[370px] ${
        open ? "flex" : "hidden"
      }`}
    >
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div>
          <p className="text-[13px] font-medium">Ask about {firstName}</p>
          <p className="text-[12px] text-faint">
            Answers come from this portfolio only.
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close chat"
          className="-mr-1 rounded-md px-2 py-1 text-[16px] leading-none text-faint transition-colors duration-200 hover:text-fg"
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>

      <div
        ref={logRef}
        role="log"
        aria-live="polite"
        className="flex-1 space-y-4 overflow-y-auto px-4 py-4 text-[14px]"
      >
        {messages.length === 0 && (
          <div className="space-y-3">
            <p className="text-muted">
              Ask about his experience, projects or the decisions behind them.
            </p>
            <div className="flex flex-col items-start gap-2">
              {SUGGESTIONS.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => send(suggestion)}
                  className="rounded-md border border-line bg-surface px-2.5 py-1.5 text-left text-[13px] text-muted transition-colors duration-200 hover:border-line-strong hover:bg-surface-hover hover:text-fg"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((message, index) => (
          <div key={index}>
            <p className="mb-1 text-[11px] uppercase tracking-[0.08em] text-faint">
              {message.role === "user" ? "You" : "Portfolio"}
            </p>
            <p className="whitespace-pre-wrap text-muted">
              {message.content}
              {pending &&
                message.role === "assistant" &&
                index === messages.length - 1 && (
                  <span aria-hidden="true" className="text-faint">
                    ▍
                  </span>
                )}
            </p>
          </div>
        ))}

        {pending && messages[messages.length - 1]?.role === "user" && (
          <p className="text-[13px] text-faint">Thinking…</p>
        )}

        {error && (
          <p role="alert" className="text-[13px] text-[#f87171]/90">
            {error}
          </p>
        )}
      </div>

      <form
        onSubmit={onSubmit}
        className="flex items-center gap-2 border-t border-line px-3 py-3"
      >
        <label htmlFor="chat-input" className="sr-only">
          Your question
        </label>
        <input
          id="chat-input"
          ref={inputRef}
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask a question…"
          maxLength={500}
          autoComplete="off"
          className="min-w-0 flex-1 rounded-md border border-line bg-surface px-3 py-2 text-[14px] text-fg placeholder:text-faint focus:border-line-strong focus:outline-none"
        />
        <button
          type="submit"
          disabled={pending || !input.trim()}
          className="rounded-md border border-line bg-surface px-3 py-2 text-[13px] text-muted transition-colors duration-200 hover:border-line-strong hover:bg-surface-hover hover:text-fg disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-line disabled:hover:bg-surface disabled:hover:text-muted"
        >
          Send
        </button>
      </form>
    </div>
  );
}
