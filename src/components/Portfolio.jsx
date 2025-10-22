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
  {
    title: "TimeSlotter",
    subtitle:
      "Full-stack Developer Intern • Vellore (Remote) • May 2024 – June 2024",
    desc: "Designed RESTful APIs with Node.js and Express for user management and bookings. Implemented JWT authentication and optimized MongoDB schemas for better performance.",
    links: [],
  },
];

const projects = [
  {
    title: "Social Media Backend",
    subtitle: "Microservices Architecture",
    desc: "Distributed backend with 4 microservices, API Gateway, and JWT authentication. Event-driven system using RabbitMQ and Redis caching for performance optimization.",
    links: [
      {
        icon: <FaGlobe size={14} />,
        text: "Project Link",
        url: "https://github.com/KrishnamBiyani/social-media-microservices",
      },
    ],
  },
  {
    title: "StreamHub",
    subtitle: "Browser-based Livestreaming",
    desc: "Full-stack livestreaming platform with React frontend and Node.js backend. Features real-time video processing using FFmpeg and Docker containerization.",
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
    desc: "Real-time competitive coding platform with MERN stack. Features live coding battles, Judge0 API integration, and Socket.IO for real-time collaboration.",
    links: [
      {
        icon: <FaGlobe size={14} />,
        text: "Project Link",
        url: "https://code-duel-m582.onrender.com/",
      },
    ],
  },
  {
    title: "Chatty",
    subtitle: "Realtime Chat Application",
    desc: "Full-stack chat application with real-time messaging via Socket.IO. Features JWT authentication, themeable UI with 32+ themes, and Cloudinary image uploads.",
    links: [
      {
        icon: <FaGlobe size={14} />,
        text: "Project Link",
        url: "https://fullstack-chat-app-wjuo.onrender.com/",
      },
    ],
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen text-white font-sans px-3 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 relative">
      <div className="max-w-4xl mx-auto relative z-10 p-4 sm:p-6 lg:p-8 xl:p-10 rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
        <Header />
        <Bio />

        <Section title="Work Highlights" delay={0.5}>
          {experiences.map((exp, idx) => (
            <ExperienceItem key={idx} {...exp} index={idx} />
          ))}
        </Section>

        <Section title="Projects" delay={0.7}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-4 sm:gap-y-6 lg:gap-y-8 mt-4 sm:mt-6">
            {projects.map((proj, idx) => (
              <ProjectItem key={idx} {...proj} index={idx} />
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
