export default function ProjectItem({ title, subtitle, desc, links }) {
  return (
    <div>
      <h3 className="font-semibold text-base">{title}</h3>
      {subtitle && <p className="text-sm text-custom-gray-dark">{subtitle}</p>}
      <p className="text-custom-gray mt-1 leading-relaxed text-base">{desc}</p>
      {links?.length > 0 && (
        <div className="flex gap-4 mt-2 text-sm text-custom-gray-dark">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-custom-blue transition-colors"
            >
              {link.icon} {link.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
