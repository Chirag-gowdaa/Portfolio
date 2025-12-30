"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Instagram, Linkedin, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { title } from "process";
export default function Home() {
  const [devInSyncImageIndex, setDevInSyncImageIndex] = useState(0);
  
  const devInSyncImages = [
    "/Dev_in_sync photos/Screenshot 2025-12-30 153521.png",
    "/Dev_in_sync photos/Screenshot 2025-12-30 153956.png",
    "/Dev_in_sync photos/Screenshot 2025-12-30 154031.png",
    "/Dev_in_sync photos/Screenshot 2025-12-30 154111.png",
    "/Dev_in_sync photos/Screenshot 2025-12-30 154131.png",
  ];

  const nextImage = () => {
    setDevInSyncImageIndex((prev) => (prev + 1) % devInSyncImages.length);
  };

  const prevImage = () => {
    setDevInSyncImageIndex((prev) => (prev - 1 + devInSyncImages.length) % devInSyncImages.length);
  };

  const projectSections = [
    {
      category: "DevOps",
      projects: [
        {
          title: "DevIn-Sync",
          desc: "DevOps-focused platform automating deployment workflows and environment sync.",
          stack: "Docker, Kubernetes, GitHub Actions, CI/CD, Cloud",
          img: "/Dev_in_sync photos/Screenshot 2025-12-30 153521.png",
          repo: "https://github.com/Chirag-gowdaa/DevIn-Sync",
          isNotHosted: true,
        },
        {
          title: "DataGone (SIH)",
          desc: "Secure data-wiping platform built for Smart India Hackathon with end‑to‑end pipeline.",
          stack: "C++, Kotlin, Debian, Node.js, JavaScript, Python, Docker, CI/CD",
          img: "/datagone.png",
          link: "https://frontend-9fkn.vercel.app/",
          repo: "https://github.com/Chirag-gowdaa/Sih",
        },
      ],
    },
    {
      category: "Web Development",
      projects: [
        {
          title: "CreatorSpace",
          desc: "Full‑stack creator platform with OAuth, subscriptions, and Razorpay integration.",
          stack: "Next.js, Tailwind, MongoDB, Razorpay, REST APIs",
          img: "/yourspace.png",
          link: "https://creator-space-puce.vercel.app/",
          repo: "https://github.com/Chirag-gowdaa/Creator-Space",
        },
        {
          title: "MovieKnight",
          desc: "Personalised movie search & recommendation engine with rich filters.",
          stack: "Next.js, OMDB API, Tailwind",
          img: "/movie.png",
          link: "https://movie-knight-eta.vercel.app/",
          repo: "https://github.com/Chirag-gowdaa/MovieKnight",
        },
      ],
    },
    {
      category: "AI/ML",
      projects: [
        {
          title: "Stress Level Detection",
          desc: "AI-powered stress level detection web app using ML models and interactive UI.",
          stack: "Python, ML, Flask / FastAPI, Frontend",
          img: "/stress.png",
          link: "https://stress-level-detection-znlu.vercel.app/",
          repo: "https://github.com/Chirag-gowdaa/Stress_level_detection",
        },
        {
          title: "MoodPredictAI",
          desc: "GenAI-based mood prediction and journaling experience with dynamic prompts.",
          stack: "EJS, Node.js, OpenAI API, Express",
          img: "/mood.png",
          link: "https://moodpredictai.onrender.com/",
          repo: "https://github.com/Chirag-gowdaa/MoodPredictAI",
        },
      ],
    },
  ];
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 flex flex-wrap justify-center gap-3 text-xs sm:text-sm"
        >
          {[
            "Full‑Stack Web Development",
            "DevOps & CI/CD",
            "AI / ML & GenAI",
          ].map((tag) => (
            <span
              key={tag}
              className="px-4 py-1 rounded-full border border-teal-400/40 bg-teal-400/10 text-teal-100 shadow-sm backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
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
          I love building clean, fast web experiences, automating workflows with DevOps, and
          exploring how AI/ML can be used in everyday products. When I’m not coding, you’ll
          usually find me lifting heavy or creating content around tech, fitness, and discipline —
          the ultimate combo for long‑term growth 💪.
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
            "devicon-docker-plain colored",
            "devicon-kubernetes-plain colored",
            "devicon-github-original",
            "devicon-linux-plain colored",
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
        <div className="mt-10 flex flex-wrap justify-center gap-3 text-xs sm:text-sm">
          {[
            "Docker",
            "Kubernetes",
            "GitHub Actions (CI/CD)",
            "Vercel Deployments",
            "Render / Cloud Hosting",
            "Linux & Shell Scripting",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-1.5 rounded-full border border-teal-400/40 bg-teal-400/10 text-teal-200 shadow-sm"
            >
              {skill}
            </span>
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
          className="text-4xl font-bold text-center mb-4"
        >
          Projects
        </motion.h2>
        {/* <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
          A curated set of projects across <span className="text-teal-300">DevOps</span>,{" "}
          <span className="text-teal-300">Web Development</span>, and{" "}
          <span className="text-teal-300">AI/ML</span> that reflect how I ship in the real world.
        </p> */}

        <div className="space-y-14">
          {projectSections.map((section, sectionIndex) => (
            <div key={section.category}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-teal-500/60 to-transparent" />
                <h3 className="text-xl sm:text-2xl font-semibold text-teal-300">
                  {section.category}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-teal-500/60 to-transparent" />
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                {section.projects.map((proj, i) => (
                  <motion.div
                    key={proj.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (sectionIndex * 0.2) + i * 0.1 }}
                    className="bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-950/90 rounded-2xl p-5 sm:p-6 shadow-xl border border-white/5 hover:border-teal-400/60 hover:shadow-[0_0_30px_rgba(45,212,191,0.3)] transition transform hover:-translate-y-1 flex flex-col"
                  >
                    <div className="relative overflow-hidden rounded-xl mb-4 group">
                      {proj.title === "DevIn-Sync" ? (
                        <>
                          <motion.div
                            key={devInSyncImageIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Image
                              src={devInSyncImages[devInSyncImageIndex]}
                              alt={`${proj.title} - Image ${devInSyncImageIndex + 1}`}
                              width={500}
                              height={300}
                              className="object-cover w-full h-auto"
                            />
                          </motion.div>
                          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-medium bg-yellow-500/90 text-black">
                            Screenshots Only (Repo)
                          </span>
                          <div className="absolute inset-0 flex items-center justify-between px-2">
                            <button
                              onClick={prevImage}
                              className="bg-black/70 hover:bg-black/90 rounded-full p-2 backdrop-blur-sm transition opacity-80 hover:opacity-100"
                              aria-label="Previous image"
                            >
                              <ChevronLeft size={24} className="text-white" />
                            </button>
                            <button
                              onClick={nextImage}
                              className="bg-black/70 hover:bg-black/90 rounded-full p-2 backdrop-blur-sm transition opacity-80 hover:opacity-100"
                              aria-label="Next image"
                            >
                              <ChevronRight size={24} className="text-white" />
                            </button>
                          </div>
                          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5">
                            {devInSyncImages.map((_, idx) => (
                              <div
                                key={idx}
                                className={`h-1.5 rounded-full transition-all ${
                                  idx === devInSyncImageIndex
                                    ? "w-6 bg-teal-400"
                                    : "w-1.5 bg-white/40"
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      ) : (
                        <>
                          <Image
                            src={proj.img}
                            alt={proj.title}
                            width={500}
                            height={300}
                            className="object-cover w-full h-auto"
                          />
                          {proj.isNotHosted && (
                            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-medium bg-yellow-500/90 text-black">
                              Screenshots Only (Repo)
                            </span>
                          )}
                        </>
                      )}
                    </div>
                    <h4 className="text-xl font-semibold mb-1.5">{proj.title}</h4>
                    <p className="text-gray-400 text-sm mb-2">{proj.desc}</p>
                    <p className="text-xs text-teal-300 mb-4">{proj.stack}</p>
                    <div className="mt-auto flex flex-wrap gap-3">
                      {proj.link && !proj.isNotHosted && (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-1.5 rounded-full bg-teal-500 text-black text-xs font-semibold shadow hover:bg-teal-400 transition"
                        >
                          Live Demo
                        </a>
                      )}
                      {proj.repo && (
                        <a
                          href={proj.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-1.5 rounded-full border border-gray-500 text-xs font-semibold text-gray-200 hover:border-teal-400 hover:text-teal-200 transition"
                        >
                          GitHub Repo
                        </a>
                      )}
                      {proj.isNotHosted && !proj.link && (
                        <span className="text-[11px] text-gray-400">
                          Demo coming soon – check the repo for details.
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section >
      {/* Resume section */}
      <section className="flex flex-col items-center justify-center py-20 px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-3">My Resume</h2>
        <p className="text-gray-400 text-sm sm:text-base mb-8 text-center max-w-xl">
          A concise snapshot of my skills, projects, and experience. You can scroll through it
          here or download the PDF directly.
        </p>

        <div
          style={{
            width: "420px",
            height: "700px",
            padding: "16px",
            borderRadius: "40px",
            boxShadow:
              "0 0 40px rgba(45,212,191,0.22), 0 10px 40px rgba(15,23,42,0.9)",
            border: "1px solid rgba(45,212,191,0.4)",
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
            src="/chirag_1ds23cb009.pdf"
            width="100%"
            height="100%"
            style={{ borderRadius: "24px", border: "1px solid #aaa" }}
            title="Chirag's Resume"
            scrolling="no"
          ></iframe>
        </div>
        <a
          href="/chirag_1ds23cb009.pdf"
          download
          className="mt-6 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white text-sm font-medium shadow-lg hover:opacity-90 transition"
        >
          Download Resume
        </a>
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
