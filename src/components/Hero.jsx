import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center h-screen text-center px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-4"
      >
        Hello, I'm <span className="text-blue-400">Sai Teja</span> 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl max-w-xl mb-8"
      >
        M.Tech Computer Science student at IIT Dharwad specializing in Edge AI,
        Mixed-Criticality Systems, and Real-Time Scheduling.
      </motion.p>

      <motion.a
        href="#projects"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-600 px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
      >
        View My Work
      </motion.a>
    </section>
  );
}
