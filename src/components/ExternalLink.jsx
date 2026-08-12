export default function ExternalLink({ href, children, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-1.5 text-[13px] text-muted transition-colors duration-200 hover:text-fg ${className}`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}
