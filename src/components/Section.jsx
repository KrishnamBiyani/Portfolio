import { motion } from "framer-motion";

export default function Section({ title, delay, children }) {
  // Section headers get the Jacob's Ladder flip effect
  const sectionLadderVariants = {
    hidden: {
      opacity: 0,
      rotateX: -90,
      y: -25,
      filter: "blur(6px)",
      transformOrigin: "top center",
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      filter: "blur(0px)",
      transformOrigin: "top center",
      transition: {
        duration: 0.7,
        delay,
        ease: [0.68, -0.55, 0.265, 1.55],
        times: [0, 0.3, 0.7, 1],
        opacity: { duration: 0.3, delay },
        rotateX: {
          duration: 0.5,
          delay,
          ease: [0.68, -0.55, 0.265, 1.55],
        },
        y: {
          duration: 0.7,
          delay,
          ease: [0.68, -0.55, 0.265, 1.55],
        },
        filter: {
          duration: 0.4,
          delay: delay + 0.3,
        },
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: delay + 0.4,
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="mt-4 sm:mt-6 first:mt-2 sm:first:mt-3"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <motion.h2
        variants={sectionLadderVariants}
        className="heading-secondary border-b border-white/20 pb-2 sm:pb-3 mb-4 sm:mb-6 text-white/90"
      >
        {title}
      </motion.h2>
      <motion.div variants={contentVariants} className="mt-0">
        {children}
      </motion.div>
    </motion.section>
  );
}
