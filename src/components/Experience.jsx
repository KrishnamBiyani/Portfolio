import Section from "./Section.jsx";
import { experience } from "../data/portfolio.js";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-5">
        {experience.map((job) => (
          <li key={job.company}>
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="text-[17px] font-medium tracking-[-0.01em] text-fg">
                {job.company}
              </h3>
              <p className="shrink-0 font-mono text-[13px] text-faint">
                {job.period}
              </p>
            </div>

            <p className="text-[16px] text-muted">{job.role}</p>

            {job.highlight && (
              <p className="mt-1 text-[14px] text-faint">{job.highlight}</p>
            )}

            <p className="mt-1 font-mono text-[13px] text-faint">
              {job.stack.join(" · ")}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
