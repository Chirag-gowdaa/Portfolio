"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { title } from "process";
export default function Home() {
  const [showall, setshowall] = useState(false)
  const projects = [
    {
      title: "DataGone",
      desc: "Secure data-wiping platform",
      stack: "C++, Kotlin, Debian, Node.js, JavaScript, Python",
      img: "/datagone.png",
      link: "https://frontend-9fkn.vercel.app/"
    },
    {
      title: "CreatorSpace",
      desc: "Full-stack platform for creators with OAuth & Razorpay.",
      stack: "Next.js, Tailwind, MongoDB, Razorpay",
      img: "/yourspace.png",
      link: "https://creator-space-puce.vercel.app/"
    },
    {
      title: "MovieKnight",
      desc: "Personalised movie search engine & recommendation system.",
      stack: "Next.js, OMDB API",
      img: "/movie.png",
      link: "https://movie-knight-eta.vercel.app/"
    },
    {
      title: "Password Manager",
      desc: "Secure password storage with encryption.",
      stack: "React, Node.js, MongoDB",
      img: "/password.png",
      link: "https://movie-knight-eta.vercel.app/"
    },
    {
      title: "Mood-board Ai",
      desc: "AI-powered mood board is a mood predictor with different mood options",
      stack: "Ejs, Node.js, OpenAI API",
      img: "/mood.png",
      link: "https://moodpredictai.onrender.com"
    },
    {
      title: "Free2Feed",
      desc: "Hackathon project connecting surplus food donors with NGOs.",
      stack: "MERN Stack, Render",
      img: "/free2feed.png",
      link: "https://movie-knight-eta.vercel.app/"
    },
    {
      title: "Music Player",
      desc: "A inbuilt music player with custom playlist feature.",
      stack: "JavaScript, HTML, CSS",
      img: "/music.png",
      link: "https://movie-knight-eta.vercel.app/"
    },

  ];

  const visiableProjects = showall ? projects : projects.slice(0, 4);
  return (
    <div className="font-sans bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold text-teal-400">Chirag</h1>
          <ul className="flex gap-6 text-gray-300 text-sm sm:text-base">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-teal-400 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen px-6 relative pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          {/* Profile Pic */}
          <Image
            src="/me.png"
            alt="Chirag"
            width={150}
            height={150}
            className="rounded-full shadow-lg mb-6 object-cover"
          />
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent"
          >
            Hi, I’m Chirag 👋
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg sm:text-2xl text-gray-300 max-w-2xl"
          >
            Web Developer & DSA enthusiast | Exploring AI/ML & GenAI  | Gym rat, fashion lover & content creator.
          </motion.p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex gap-6 mt-10 justify-center items-center p-1"
        >
          <a
            href="mailto:gowdachiru552@gmail.com"
            className="hover:scale-110 transition-transform"
          >
            <Mail size={28} />
          </a>

          <a
            href="https://github.com/Chirag-gowdaa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Github size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/chirag-gowda-b10570351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Linkedin size={28} />
          </a>

          <a
            href="https://instagram.com/chira.g._"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Instagram size={28} />
          </a>
        </motion.div>


        {/* Background Glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[radial-gradient(circle,rgba(56,189,248,0.4)_0%,transparent_70%)] pointer-events-none"
        />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          About Me
        </motion.h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          When not coding, I’m lifting heavy or creating content about tech,
          fitness, and discipline — the ultimate tools for growth 💪.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-black/30 backdrop-blur-lg">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-10"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {[
            "devicon-html5-plain colored",
            "devicon-css3-plain colored",
            "devicon-javascript-plain colored",
            "devicon-tailwindcss-plain colored",
            "devicon-react-original colored",
            "devicon-nextjs-original-wordmark",
            "devicon-nodejs-plain colored",
            "devicon-express-original",
            "devicon-mongodb-plain colored",
            "devicon-postgresql-plain colored",
            "devicon-mysql-plain colored",
            "devicon-python-plain colored",
            "devicon-java-plain colored",
            "devicon-c-plain colored",
            "devicon-cplusplus-plain colored",
            "devicon-git-plain colored",
          ].map((icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="bg-gray-900/50 p-4 rounded-xl shadow-lg flex items-center justify-center cursor-pointer"
            >
              <i className={`${icon} text-5xl`}></i>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}

      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2">
          {visiableProjects.map((proj, i) => (

            <a href={proj.link} target="_blank" className="block">
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-gray-900/60 rounded-2xl p-6 hover:scale-105 transition shadow-xl flex flex-col"
              >
                <Image
                  src={proj.img}
                  alt={proj.title}
                  width={500}
                  height={300}
                  className="rounded-lg mb-4 object-cover w-full h-auto"
                />
                <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
                <p className="text-gray-400 mb-3">{proj.desc}</p>
                <p className="text-sm text-teal-400">{proj.stack}</p>
              </motion.div> </a>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setshowall(!showall)}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-medium shadow-lg hover:opacity-90 transition"
          >
            {showall ? "Show Less" : "View More →"}
          </motion.button>
        </div>
      </section >
      {/* Resume section */}
      <section className="flex flex-col items-center justify-center py-10 min-h-screen">
        <h2 className="text-3xl font-semibold mb-6">My Resume</h2>

        <div
          style={{
            width: "420px",
            height: "700px",
            padding: "16px",
            borderRadius: "40px",
            // background: "linear-gradient(145deg, #f0f0f0, #e0e0e0)",
            boxShadow: "8px 8px 20px rgba(0,0,0,0.1), -8px -8px 20px rgba(255,255,255,0.7)",
            border: "2px solid #ddd",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "6px",
              borderRadius: "3px",
              backgroundColor: "#ccc",
              marginBottom: "10px",
            }}
          ></div>

          <iframe
            src="/Portfolio.pdf"
            width="100%"
            height="100%"
            style={{ borderRadius: "24px", border: "1px solid #aaa" }}
            title="Chirag's Resume"
            scrolling="no"
          ></iframe>
        </div>
      </section>


      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 text-center bg-black/30 backdrop-blur-lg"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          Get In Touch
        </motion.h2>
        <p className="text-gray-300 mb-6">
          Have a project in mind or want to chat? Feel free to
        </p>
        <a
          href="mailto:gowdachiru552@gmail.com"
          className="inline-block bg-gradient-to-r from-blue-500 to-teal-400 text-white font-medium px-6 py-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          Email Me
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Chirag S — Built with Next.js & Tailwind
      </footer>
    </div >
  );
}
