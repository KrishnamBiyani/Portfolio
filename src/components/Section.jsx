import { motion } from "framer-motion";

export default function Section({ title, delay, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="mt-10 first:mt-5"
    >
      <h2 className="text-xl font-semibold border-b border-custom-border pb-2">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </motion.section>
  );
}
