import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import project1 from "../assets/Project1.jpg";
import project2 from "../assets/Project2.jpg";
import project3 from "../assets/Project3.jpg";

export default function Projects() {
  const projects = [
    {
      title: "JobSphere",
      description:
        "JobSphere is a web application built with Flask that serves as a platform for job seekers and companies to connect",
      tech: ["Flask", "SQLAlchemy", "JavaScript", "HTML", "CSS"],
      img: project1,
      github: "https://github.com/Saitejadasari-19/JobSphere",
      demo: "",
    },
    {
      title: "C Shell",
      description:
        "A lightweight custom shell implemented in C.",
      tech: ["C++", "Linux System Calls (fork, execvp, waitpid)", "GCC"],
      img: project2,
      github: "https://github.com/Saitejadasari-19/Shell",
      demo: "",
    },
    {
      title: "Image Forgery Detection using Deep CNNs",
      description:
        "Developed a CNN model to detect and localize forged regions in digital images using spatial and frequency-domain features.",
      tech: ["Python", "TensorFlow", "OpenCV"],
      img: project3,
      github: "https://github.com/Saitejadasari-19/Image-Forgery-Detection",
      demo: "",
    },
  ];

  return (
    <section id="projects" className="bg-gray-800 py-20 px-6 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-white"
      >
        Projects
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300"
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
              <h3 className="text-2xl font-semibold mb-3 text-blue-400">{proj.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{proj.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-xs px-3 py-1 rounded-full text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex space-x-4">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-blue-600 px-3 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
                >
                  <FaGithub /> <span>GitHub</span>
                </a>
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-green-600 px-3 py-2 rounded-lg text-sm hover:bg-green-700 transition"
                  >
                    <FaExternalLinkAlt /> <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
