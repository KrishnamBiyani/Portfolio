import Header from "./Header";
import Bio from "./Bio";
import Section from "./Section";
import ExperienceItem from "./ExperienceItem";
import ProjectItem from "./ProjectItem";
import { FaGlobe } from "react-icons/fa";

const experiences = [
  {
    title: "Influcon Digitals",
    subtitle:
      "Frontend Developer Intern • Kolkata (Remote) • May 2025 – June 2025",
    desc: "Built and deployed the official website using React & Tailwind CSS with pixel-perfect Figma designs, responsive layouts, and smooth animations.",
    links: [
      {
        icon: <FaGlobe size={14} />,
        text: "Live Site",
        url: "https://influcondigitals.com/",
      },
    ],
  },
];

const projects = [
  {
    title: "StreamHub",
    subtitle: "Browser-based Livestreaming",
    desc: "Livestream to YouTube & HLS using MediaRecorder, FFmpeg, and Docker.",
    links: [
      {
        icon: <FaGlobe size={14} />,
        text: "Project Link",
        url: "https://github.com/KrishnamBiyani/Streamhub_rtmp",
      },
    ],
  },
  {
    title: "DSA Duel",
    subtitle: "Real-time Competitive Coding",
    desc: "Coding duel platform with MERN, Socket.IO, and Judge0 API.",
    links: [
      {
        icon: <FaGlobe size={14} />,
        text: "Project Link",
        url: "https://code-duel-m582.onrender.com/",
      },
    ],
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-custom-bg text-white font-sans px-6 py-10">
      <div className="max-w-2xl mx-auto">
        <Header />
        <Bio />

        <Section title="Work Highlights" delay={0.5}>
          {experiences.map((exp, idx) => (
            <ExperienceItem key={idx} {...exp} />
          ))}
        </Section>

        <Section title="Projects" delay={0.7}>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 mt-6">
            {projects.map((proj, idx) => (
              <ProjectItem key={idx} {...proj} />
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
