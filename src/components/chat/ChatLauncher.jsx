import { lazy, Suspense, useCallback, useEffect, useRef, useState } from "react";

// The panel (and the chat logic with it) is only downloaded once someone asks.
const ChatPanel = lazy(() => import("./ChatPanel.jsx"));

export default function ChatLauncher() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const buttonRef = useRef(null);
  const wasOpen = useRef(false);

  const openPanel = useCallback(() => {
    setLoaded(true);
    setOpen(true);
  }, []);

  const closePanel = useCallback(() => setOpen(false), []);

  // Return focus to the launcher after the panel closes. The button is
  // remounted by then, so its ref is attached before this effect runs.
  useEffect(() => {
    if (wasOpen.current && !open) buttonRef.current?.focus();
    wasOpen.current = open;
  }, [open]);

  return (
    <>
      {/* The panel is the only chatbot control while it is open. */}
      {!open && (
        <button
          ref={buttonRef}
          type="button"
          onClick={openPanel}
          aria-haspopup="dialog"
          aria-expanded={false}
          className="fixed bottom-4 right-4 z-40 rounded-md bg-white px-3.5 py-2 text-[13px] font-medium text-black transition-colors duration-200 hover:bg-[#e8e8e8] sm:bottom-6 sm:right-6"
        >
          Ask about me <span aria-hidden="true">↗</span>
        </button>
      )}

      {loaded && (
        <Suspense fallback={null}>
          <ChatPanel open={open} onClose={closePanel} />
        </Suspense>
      )}
    </>
  );
}
