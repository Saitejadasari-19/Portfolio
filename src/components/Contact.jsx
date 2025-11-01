// src/components/Contact.jsx
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope size={28} />,
      link: "mailto:saitejadasari19@gmail.com",
      label: "Gmail",
      color: "hover:text-red-500",
    },
    {
      icon: <FaLinkedin size={28} />,
      link: "https://www.linkedin.com/in/saitejadasari19/",
      label: "LinkedIn",
      color: "hover:text-blue-500",
    },
    {
      icon: <FaGithub size={28} />,
      link: "https://github.com/Saitejadasari-19",
      label: "GitHub",
      color: "hover:text-gray-400",
    }
  ];

  return (
    <section
      id="contact"
      className="bg-gray-900 py-20 px-6 flex flex-col items-center text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-white"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-400 mb-10 max-w-md"
      >
        Let's connect! You can reach me on any of the following platforms:
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex space-x-8"
      >
        {contacts.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white ${item.color} transition-colors duration-300`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            title={item.label}
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* <p className="text-gray-500 mt-10 text-sm">
        © {new Date().getFullYear()} Sai Teja. All rights reserved.
      </p> */}
    </section>
  );
}
