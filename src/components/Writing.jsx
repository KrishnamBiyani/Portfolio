import Section from "./Section.jsx";
import ExternalLink from "./ExternalLink.jsx";
import { writing } from "../data/portfolio.js";

export default function Writing() {
  return (
    <Section id="writing" title="Writing">
      <ul className="space-y-2">
        {writing.map((article) => (
          <li
            key={article.href}
            className="flex flex-wrap items-baseline gap-x-4 gap-y-1"
          >
            <h3 className="text-[16px] text-muted">{article.title}</h3>
            <ExternalLink href={article.href}>
              {article.publication}
            </ExternalLink>
          </li>
        ))}
      </ul>
    </Section>
  );
}
