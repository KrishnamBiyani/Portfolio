import Reveal from "./Reveal.jsx";

/**
 * Section headings are deliberately quiet labels: the project and role names
 * inside them carry the visual weight.
 */
export default function Section({ id, title, children }) {
  const headingId = `${id}-heading`;

  return (
    <Reveal
      as="section"
      id={id}
      aria-labelledby={headingId}
      className="border-t border-line py-7 sm:py-8"
    >
      <h2
        id={headingId}
        className="text-[12px] uppercase tracking-[0.12em] text-faint"
      >
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </Reveal>
  );
}
