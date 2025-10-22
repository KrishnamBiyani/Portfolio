import { motion } from "framer-motion";

export default function Bio() {
  // Bio gets the Jacob's Ladder treatment too
  const bioLadderVariants = {
    hidden: {
      opacity: 0,
      rotateX: -90,
      y: -30,
      filter: "blur(8px)",
      transformOrigin: "top center",
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      filter: "blur(0px)",
      transformOrigin: "top center",
      transition: {
        duration: 0.8,
        delay: 0.3, // Comes after header
        ease: [0.68, -0.55, 0.265, 1.55],
        times: [0, 0.3, 0.7, 1],
        opacity: { duration: 0.4, delay: 0.3 },
        rotateX: {
          duration: 0.6,
          delay: 0.3,
          ease: [0.68, -0.55, 0.265, 1.55],
        },
        y: {
          duration: 0.8,
          delay: 0.3,
          ease: [0.68, -0.55, 0.265, 1.55],
        },
        filter: {
          duration: 0.5,
          delay: 0.6,
        },
      },
    },
  };

  return (
    <motion.div
      variants={bioLadderVariants}
      initial="hidden"
      animate="visible"
      className="mt-6 p-6 rounded-xl bg-white/3 border border-white/5"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <p className="body-text leading-[1.7] text-gray-100">
        Full-stack developer crafting real-time, scalable applications — from
        livestreaming platforms to collaborative coding tools and chat apps.
        Skilled in React, Tailwind CSS, Node.js, and MongoDB, with experience
        delivering production-ready projects and client solutions.
      </p>
    </motion.div>
  );
}
