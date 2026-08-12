import Section from "./Section.jsx";
import { skillsSummary } from "../data/portfolio.js";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-1 font-mono text-[14px] text-muted">
        {skillsSummary.map((row) => (
          <p key={row[0]}>{row.join(" · ")}</p>
        ))}
      </div>
    </Section>
  );
}
