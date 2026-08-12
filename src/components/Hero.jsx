import Icon from "./Icon.jsx";
import { profile, education, links } from "../data/portfolio.js";
// 128x128 (2x the rendered size). Downscaled from assets-source/profile-source.jpg.
import profilePic from "../assets/avatar.jpg";

export default function Hero() {
  return (
    <header className="pt-10 pb-8 sm:pt-14 sm:pb-9">
      <div className="flex items-center gap-4 sm:gap-5">
        <img
          src={profilePic}
          alt={`Portrait of ${profile.name}`}
          width="64"
          height="64"
          decoding="async"
          className="h-14 w-14 shrink-0 rounded-full object-cover ring-1 ring-line-strong sm:h-16 sm:w-16"
        />

        <div className="min-w-0">
          <h1 className="text-[34px] sm:text-[44px] font-medium leading-[1.05] tracking-[-0.035em] text-fg">
            {profile.name}
          </h1>
          <p className="mt-1.5 text-[16px] sm:text-[17px] text-muted">
            {profile.role}
          </p>
          <p className="text-[14px] text-faint">{profile.location}</p>
        </div>
      </div>

      <p className="mt-6 text-[17px] sm:text-[18px] text-muted">
        {profile.focus.join(" · ")}
      </p>

      <p className="mt-2 text-[14px] text-faint">
        {education.degree} · {education.shortSchool} · {education.year} · GPA{" "}
        {education.gpa}
      </p>

      <nav
        aria-label="Profile links"
        className="mt-5 flex flex-wrap gap-x-5 gap-y-1"
      >
        {links.map((link) => {
          const isExternal = !link.href.startsWith("mailto:");
          return (
            <a
              key={link.label}
              href={link.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
              className="inline-flex items-center gap-1.5 py-1 text-[14px] text-faint transition-colors duration-200 hover:text-fg"
            >
              <Icon name={link.icon} size={15} />
              {link.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
