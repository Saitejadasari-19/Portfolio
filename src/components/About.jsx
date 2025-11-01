// src/components/About.jsx
import { motion } from "framer-motion";
import profilePic from "../assets/Profile.png";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-800 py-20 px-6 md:px-20 text-white"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/3 w-full flex justify-center"
        >
          <img
            src={profilePic}
            alt="Sai Teja"
            className="rounded-2xl shadow-lg w-64 h-64 object-cover"
          />
        </motion.div>

        {/* Right side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-2/3 w-full text-center md:text-left"
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed mb-4 text-gray-300">
            I'm a passionate <span className="text-blue-400">M.Tech Computer Science</span> student at IIT Dharwad, 
            deeply interested in <span className="text-blue-400">Edge AI</span> and 
            <span className="text-blue-400"> Mixed-Criticality Systems</span>.
            I love working on real-time scheduling challenges, optimizing neural networks for embedded devices, 
            and exploring how intelligent systems can operate efficiently under tight constraints.
          </p>

          <p className="text-lg leading-relaxed text-gray-300">
            Beyond research, I enjoy solving software engineering problems and building tools that
            make systems faster, smarter, and more reliable. I’m always eager to collaborate and
            learn from experienced engineers tackling real-world edge computing challenges.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
