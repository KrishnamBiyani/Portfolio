import { motion } from "framer-motion";

export default function Bio() {
  return (
    <motion.p
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-6.5 text-base text-custom-gray leading-[1.6]"
    >
      Full-stack developer crafting real-time, scalable applications — from
      livestreaming platforms to collaborative coding tools and chat apps.
      Skilled in React, Tailwind CSS, Node.js, and MongoDB, with experience
      delivering production-ready projects and client solutions.
    </motion.p>
  );
}
