import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaGitAlt,
  FaLinux,
  FaDatabase,
} from "react-icons/fa";
import {
  SiPytorch,
  SiTensorflow,
  SiCplusplus,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "Python", icon: <FaPython size={50} className="text-yellow-400" /> },
    { name: "C++", icon: <SiCplusplus size={50} className="text-blue-500" /> },
    { name: "React", icon: <FaReact size={50} className="text-cyan-400" /> },
    { name: "JavaScript", icon: <SiJavascript size={50} className="text-yellow-300" /> },
    { name: "PyTorch", icon: <SiPytorch size={50} className="text-orange-500" /> },
    { name: "TensorFlow", icon: <SiTensorflow size={50} className="text-orange-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={50} className="text-cyan-500" /> },
    { name: "Git", icon: <FaGitAlt size={50} className="text-red-500" /> },
    { name: "Linux", icon: <FaLinux size={50} className="text-gray-300" /> },
    { name: "SQL / Databases", icon: <FaDatabase size={50} className="text-green-400" /> },
  ];

  return (
    <section id="skills" className="bg-gray-900 py-20 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-10 text-white"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-xl shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            {skill.icon}
            <p className="mt-3 text-lg font-medium text-gray-200">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
