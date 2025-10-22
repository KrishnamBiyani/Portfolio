import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoLocationSharp } from "react-icons/io5";
import profilePic from "../assets/profile.jpg";

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl bg-white/3 border border-white/5 mb-3 sm:mb-2 text-center sm:text-left"
    >
      <img
        src={profilePic}
        alt="Profile"
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-white/20 shadow-lg flex-shrink-0"
      />
      <div className="flex-1 min-w-0">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
          Hey, I'm Krishnam Biyani
        </h1>
        <p className="text-custom-gray-dark mt-1 sm:mt-0.5 text-sm sm:text-base lg:text-lg flex items-center justify-center sm:justify-start gap-x-1">
          <IoLocationSharp />
          <span>Bengaluru, India</span>
        </p>
        <div className="flex justify-center sm:justify-start gap-3 sm:gap-4 mt-3 sm:mt-2 text-lg sm:text-xl lg:text-2xl">
          <motion.a
            href="https://www.linkedin.com/in/krishnam-biyani-707070278/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#0077B5] transition-colors duration-200"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/KrishnamBiyani"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#6e5494] transition-colors duration-200"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://leetcode.com/u/krishnam_biyani/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#FFA116] transition-colors duration-200"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <SiLeetcode />
          </motion.a>
          <motion.a
            href="mailto:krishnambiyani5@gmail.com"
            className="hover:text-[#D44638] transition-colors duration-200"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope />
          </motion.a>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#4285F4] transition-colors duration-200"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFileAlt />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
