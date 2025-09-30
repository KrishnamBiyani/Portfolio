import { motion } from "framer-motion";

export default function ProjectItem({
  title,
  subtitle,
  desc,
  links,
  index = 0,
}) {
  // Jacob's Ladder cascade animation with jittery, flipping motion
  const ladderVariants = {
    hidden: {
      opacity: 0,
      rotateX: -90,
      y: -50,
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
        delay: 0.8, // Both project cards animate at the same time
        ease: [0.68, -0.55, 0.265, 1.55], // Bouncy, jittery easing
        times: [0, 0.3, 0.7, 1],
        opacity: { duration: 0.4, delay: 0.8 },
        rotateX: {
          duration: 0.6,
          delay: 0.8,
          ease: [0.68, -0.55, 0.265, 1.55],
        },
        y: {
          duration: 0.8,
          delay: 0.8,
          ease: [0.68, -0.55, 0.265, 1.55],
        },
        filter: {
          duration: 0.5,
          delay: 1.1, // 0.8 + 0.3 for consistent timing
        },
      },
    },
  };

  return (
    <motion.div
      variants={ladderVariants}
      initial="hidden"
      animate="visible"
      className="mb-6"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <div>
        <h3 className="heading-tertiary">{title}</h3>
        {subtitle && <p className="subheading mt-1">{subtitle}</p>}
        <p className="body-text mt-3 leading-relaxed">{desc}</p>
        {links?.length > 0 && (
          <div className="flex gap-4 mt-3">
            {links.map((link, i) => (
              <motion.a
                key={i}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="link-primary flex items-center gap-1"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon} {link.text}
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
