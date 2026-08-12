/**
 * Single source of truth for portfolio content.
 *
 * Sourced from Krishnam's resume (public/resume.pdf). Read by the UI and by
 * the /api/chat serverless function.
 *
 * Two kinds of fields live here:
 *   - display fields (focus, headline, stack, highlight, skillsSummary) are the
 *     short forms the homepage shows;
 *   - detail fields (about, points, description, notes, tech, skills,
 *     coursework) are the full resume-backed facts, shown only to the chatbot.
 * The homepage stays scannable; the chatbot still knows everything.
 */

export const profile = {
  name: "Krishnam Biyani",
  role: "Full-Stack Developer",
  location: "Kolkata, India",
  email: "krishnambiyani5@gmail.com",
  focus: ["Backend systems", "Distributed systems", "Real-time applications"],
  about: [
    "Full-stack developer with a backend focus. I work on distributed services, event-driven architecture and real-time applications.",
    "Recent projects include a microservices backend on RabbitMQ and Redis, a livestreaming platform deployed on AWS EC2, and a real-time coding platform with a FastAPI RAG service.",
  ],
};

export const education = {
  school: "Vellore Institute of Technology",
  shortSchool: "VIT",
  degree: "B.Tech, Computer Science",
  graduated: "May 2026",
  year: "2026",
  gpa: "8.88",
  location: "Vellore, Tamil Nadu",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Operating Systems",
    "Database Management Systems",
    "Computer Networks",
  ],
};

export const problemSolving = "250+ DSA problems solved on LeetCode (C++)";

/**
 * Recruiter and availability facts, provided directly by Krishnam rather than
 * taken from the resume. Kept as its own object so the two sources stay
 * distinguishable in the chatbot context and neither is edited by accident.
 * Not rendered on the homepage.
 *
 * Salary and expected salary are deliberately absent: they are private, and
 * leaving them out means the assistant has nothing to disclose or paraphrase.
 */
export const recruiter = {
  spokenLanguages: ["English", "Hindi"],
  basedIn: "Kolkata, India",
  openToRelocation: true,
  openToRemote: true,
  openToHybrid: true,
  preferredLocation: "Open to any location",
  seeking: "Full-time frontend, backend or full-stack roles",
  primaryInterest: "Backend and full-stack development",
  availableToJoin: "Immediately",
  noticePeriod: "None",
  currentEmployment: "Not currently employed",
  totalExperience:
    "4 months of internship experience in total, across two internships",
};

export const links = [
  { label: "GitHub", icon: "github", href: "https://github.com/KrishnamBiyani" },
  {
    label: "LinkedIn",
    icon: "linkedin",
    href: "https://www.linkedin.com/in/krishnam-biyani-707070278/",
  },
  {
    label: "LeetCode",
    icon: "code",
    href: "https://leetcode.com/u/krishnam_biyani/",
  },
  { label: "Medium", icon: "pen", href: "https://medium.com/@krishnambiyani5" },
  { label: "Resume", icon: "file", href: "/resume.pdf" },
  { label: "Email", icon: "mail", href: `mailto:${profile.email}` },
];

export const experience = [
  {
    company: "Influcon Digitals",
    role: "Frontend Developer Intern",
    location: "Remote / Kolkata",
    period: "May 2025 – Jul 2025",
    stack: ["React", "Tailwind CSS"],
    highlight: "Built an 8-section company website from Figma designs.",
    points: [
      "Translated Figma mockups into an 8-section company website with React and Tailwind CSS, including a custom sticky-stacking scroll section with an embedded video header built using React Hooks and Intersection Observer.",
      "Worked with the development team and product designer through iterative feedback cycles, researching and evaluating frontend libraries against project requirements and delivering regular progress updates.",
    ],
    link: { label: "Live site", href: "https://influcondigitals.com/" },
  },
  {
    company: "TimeSlotter",
    role: "Full-stack Developer Intern",
    location: "Remote / Vellore",
    period: "May 2024 – Jul 2024",
    stack: ["Node.js", "Express", "MongoDB", "JWT"],
    highlight: "Built REST APIs for user management, bookings and auth.",
    points: [
      "Built and Postman-tested RESTful APIs with Node.js and Express for user management, bookings and JWT-based authentication.",
      "Refactored MongoDB schemas to improve data consistency.",
    ],
    link: null,
  },
];

export const featuredProjects = [
  {
    name: "DSA Duel",
    headline: "Real-time competitive coding platform",
    stack: ["React", "Node.js", "Socket.IO", "FastAPI", "Pinecone"],
    highlight: "RAG-powered post-match review",
    description:
      "Competitive coding platform where two users solve LC75 problems under synchronized, server-authoritative timers over Socket.IO. Load testing at 300 concurrent clients achieved 100% successful room joins.",
    notes:
      "A Python and FastAPI RAG microservice stores 130+ vector embeddings in Pinecone and retrieves grounded context through similarity search to power an AI post-match review assistant. The Node.js and Python services deploy independently on Render with MongoDB Atlas, developed through a feature-branch Git workflow with pull requests.",
    tech: [
      "React",
      "Node.js",
      "Python",
      "FastAPI",
      "Socket.IO",
      "Judge0",
      "Pinecone",
      "Gemini",
    ],
    links: [
      { label: "Live Demo", href: "https://code-duel-m582.onrender.com/" },
      { label: "GitHub", href: "https://github.com/KrishnamBiyani/Code-Duel" },
    ],
  },
  {
    name: "Social Media Backend",
    headline: "Distributed microservices backend",
    stack: ["Node.js", "RabbitMQ", "Redis", "JWT"],
    highlight: "4 services behind an API Gateway · event-driven",
    description:
      "Event-driven backend of four independently deployable microservices (Identity, Post, Media, Search) behind a centralized API Gateway with JWT authentication.",
    notes:
      "RabbitMQ topic exchanges carry asynchronous service communication, so a post.deleted event triggers media cleanup and search index updates across dependent services. Redis caches paginated feed APIs and enforces centralized rate limiting at the gateway to reduce redundant database reads.",
    tech: [
      "Node.js",
      "Distributed Systems",
      "Microservices",
      "RabbitMQ",
      "Redis",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/KrishnamBiyani/social-media-microservices",
      },
    ],
  },
  {
    name: "StreamHub",
    headline: "Browser-based live streaming platform",
    stack: ["React", "FFmpeg", "Docker", "AWS EC2"],
    highlight: "FFmpeg transcoding to RTMP · deployed with CI/CD",
    description:
      "Live streaming platform that lets authenticated users broadcast their webcam and microphone feeds straight from the browser.",
    notes:
      "A real-time FFmpeg transcoding pipeline converts WebM streams into H.264/AAC for RTMP delivery to YouTube and a Dockerized NGINX RTMP server, covered by 9 automated Jest and Supertest tests. Deployed on AWS EC2 with Docker Compose, Nginx, Let's Encrypt HTTPS and GitHub Actions CI/CD.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "FFmpeg",
      "Docker",
      "NGINX RTMP",
      "AWS EC2",
    ],
    links: [
      { label: "Live Demo", href: "https://streamhubkb.duckdns.org" },
      {
        label: "GitHub",
        href: "https://github.com/KrishnamBiyani/Streamhub_rtmp",
      },
    ],
  },
];

/** Short form for the homepage. Every item also appears in `skills` below. */
export const skillsSummary = [
  ["TypeScript", "JavaScript", "Python", "C++"],
  ["Node.js", "Express", "FastAPI", "React", "Socket.IO"],
  ["RabbitMQ", "Redis", "MongoDB", "Pinecone"],
  ["Docker", "AWS EC2", "Nginx", "GitHub Actions"],
];

export const skills = [
  {
    group: "Languages",
    items: ["C++ (STL)", "JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "Distributed Systems",
      "Microservices",
      "REST APIs",
      "Event-Driven Architecture",
      "MongoDB Atlas",
      "Redis",
      "RabbitMQ",
      "Socket.IO",
      "JWT",
      "Jest",
    ],
  },
  {
    group: "Frontend",
    items: ["React.js", "Zustand", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    group: "AI Engineering",
    items: ["RAG Pipelines", "Vector Embeddings", "Pinecone", "Gemini API"],
  },
  {
    group: "Cloud & Infra",
    items: [
      "Linux",
      "Docker",
      "Docker Compose",
      "Nginx",
      "AWS EC2",
      "Git",
      "GitHub Actions CI/CD",
    ],
  },
];

export const writing = [
  {
    title: "JWTs Are Stateless Until They Aren't",
    publication: "Medium",
    description:
      "How refresh tokens and token revocation introduce server-side state into JWT-based authentication systems, with the practical design tradeoffs that follow.",
    href: "https://medium.com/@krishnambiyani5/jwts-are-stateless-until-they-arent-be140d49ab17",
  },
];

/**
 * Flattens everything above into plain text for the chatbot's system prompt.
 * The chatbot sees the full detail the homepage deliberately leaves out.
 */
export function buildAIContext() {
  const lines = [];
  const mostRecent = experience[0];

  lines.push("RESUME AND PORTFOLIO FACTS");
  lines.push(`Name: ${profile.name}`);
  lines.push(`Role: ${profile.role}`);
  lines.push(`Location: ${profile.location}`);
  lines.push(`Email: ${profile.email}`);
  lines.push(`Focus: ${profile.focus.join(", ")}`);
  lines.push(`About: ${profile.about.join(" ")}`);
  lines.push("");

  lines.push("EDUCATION");
  lines.push(
    `- Holds a ${education.degree} from ${education.school}, ${education.location}. Graduated ${education.graduated}. GPA ${education.gpa}. He has already completed this degree; he is not a current student and not an upcoming graduate.`,
  );
  lines.push(`- Coursework: ${education.coursework.join(", ")}`);
  lines.push(`- Problem solving: ${problemSolving}`);
  lines.push("");

  lines.push("LINKS");
  for (const link of links) {
    lines.push(`- ${link.label}: ${link.href}`);
  }
  lines.push("");

  lines.push("EXPERIENCE");
  for (const job of experience) {
    lines.push(`- ${job.role}, ${job.company} (${job.period}, ${job.location})`);
    for (const point of job.points) lines.push(`  - ${point}`);
    if (job.link) lines.push(`  - ${job.link.label}: ${job.link.href}`);
  }
  lines.push("");

  lines.push("FEATURED PROJECTS");
  for (const project of featuredProjects) {
    lines.push(`- ${project.name}: ${project.headline}`);
    lines.push(`  - ${project.description}`);
    if (project.notes) lines.push(`  - ${project.notes}`);
    lines.push(`  - Tech: ${project.tech.join(", ")}`);
    for (const link of project.links) {
      lines.push(`  - ${link.label}: ${link.href}`);
    }
  }
  lines.push("");

  lines.push("SKILLS");
  for (const skill of skills) {
    lines.push(`- ${skill.group}: ${skill.items.join(", ")}`);
  }
  lines.push("");

  lines.push("TECHNICAL WRITING");
  for (const article of writing) {
    lines.push(
      `- "${article.title}" (${article.publication}): ${article.description}`,
    );
    lines.push(`  - Link: ${article.href}`);
  }
  lines.push("");

  lines.push("RECRUITER AND AVAILABILITY FACTS (stated directly by Krishnam)");
  lines.push(`- Total work experience: ${recruiter.totalExperience}.`);
  lines.push(
    `- Most recent role: ${mostRecent.role} at ${mostRecent.company} (${mostRecent.period}). This is a past role, not current employment.`,
  );
  lines.push(`- Current employment: ${recruiter.currentEmployment}.`);
  lines.push(`- Seeking: ${recruiter.seeking}.`);
  lines.push(`- Primary interest: ${recruiter.primaryInterest}.`);
  lines.push(`- Available to join: ${recruiter.availableToJoin}.`);
  lines.push(`- Notice period: ${recruiter.noticePeriod}.`);
  lines.push(`- Based in: ${recruiter.basedIn}.`);
  lines.push(
    `- Open to relocation: ${recruiter.openToRelocation ? "Yes" : "No"}. Open to remote work: ${recruiter.openToRemote ? "Yes" : "No"}. Open to hybrid work: ${recruiter.openToHybrid ? "Yes" : "No"}.`,
  );
  lines.push(`- Preferred location: ${recruiter.preferredLocation}.`);
  lines.push(
    `- Spoken languages: ${recruiter.spokenLanguages.join(", ")}. These are spoken languages, not programming languages.`,
  );

  return lines.join("\n");
}
