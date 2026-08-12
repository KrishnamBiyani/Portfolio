import Hero from "./components/Hero.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Writing from "./components/Writing.jsx";
import Contact from "./components/Contact.jsx";
import ChatLauncher from "./components/chat/ChatLauncher.jsx";
import { profile } from "./data/portfolio.js";

export default function App() {
  return (
    <div className="mx-auto w-full max-w-[42rem] px-5 sm:px-8">
      <Hero />

      <main>
        <Experience />
        <Projects />
        <Skills />
        <Writing />
        <Contact />
      </main>

      <footer className="border-t border-line py-6 text-[13px] text-faint">
        <p>{profile.name}</p>
      </footer>

      <ChatLauncher />
    </div>
  );
}
