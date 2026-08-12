import Section from "./Section.jsx";
import ExternalLink from "./ExternalLink.jsx";
import { featuredProjects } from "../data/portfolio.js";

export default function Projects() {
  return (
    <Section id="work" title="Selected Work">
      <ol>
        {featuredProjects.map((project) => (
          <li
            key={project.name}
            className="-mx-3 rounded-md border-t border-line px-3 py-4 transition-colors duration-200 first:border-t-0 hover:bg-surface"
          >
            <h3 className="text-[19px] font-medium tracking-[-0.015em] text-fg">
              {project.name}
            </h3>

            <p className="mt-1 text-[16px] text-muted">{project.headline}</p>

            <p className="mt-2 font-mono text-[13px] text-faint">
              {project.stack.join(" · ")}
            </p>

            <p className="mt-1 text-[14px] text-faint">{project.highlight}</p>

            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
              {project.links.map((link) => (
                <ExternalLink key={link.label} href={link.href}>
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
