import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoLocationSharp } from "react-icons/io5";
import profilePic from "../assets/profile.jpg";

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="flex items-center gap-6.5"
    >
      <img
        src={profilePic}
        alt="Profile"
        className="w-24 h-24 rounded-full border border-custom-border"
      />
      <div>
        <h1 className="text-xl font-bold">Hey, I’m Krishnam Biyani</h1>
        <p className="text-custom-gray-dark mt-0.5 text-base flex items-center gap-x-1">
          <IoLocationSharp />
          <span>Bengaluru, India</span>
        </p>
        <div className="flex gap-4 mt-2 text-xl">
          <a
            href="https://www.linkedin.com/in/krishnam-biyani-707070278/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-custom-blue"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/KrishnamBiyani"
            target="_blank"
            rel="noreferrer"
            className="hover:text-custom-gray"
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/u/krishnam_biyani/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#FFA116]"
          >
            <SiLeetcode />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
