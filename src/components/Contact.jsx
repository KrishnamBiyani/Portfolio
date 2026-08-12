import Section from "./Section.jsx";
import ExternalLink from "./ExternalLink.jsx";
import { profile, links } from "../data/portfolio.js";

const resume = links.find((link) => link.label === "Resume");

export default function Contact() {
  return (
    <Section id="contact" title="Get in touch">
      <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
        <a
          href={`mailto:${profile.email}`}
          className="text-[18px] sm:text-[19px] text-fg underline decoration-line-strong underline-offset-[6px] transition-colors duration-200 hover:decoration-fg"
        >
          {profile.email}
        </a>
        <ExternalLink href={resume.href}>{resume.label}</ExternalLink>
      </div>
    </Section>
  );
}
