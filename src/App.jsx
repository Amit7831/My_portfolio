import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
// Importing all page components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const sections = [
      { ref: homeRef, id: "home" },
      { ref: aboutRef, id: "about" },
      { ref: projectsRef, id: "projects" },
      { ref: contactRef, id: "contact" },
    ];

    // ✅ FIX 1: Set IDs on DOM elements BEFORE observing
    sections.forEach((section) => {
      if (section.ref.current) {
        section.ref.current.id = section.id;
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // ✅ FIX 2: Increase threshold to 50%
        rootMargin: "-5% 0px -5% 0px", // ✅ FIX 3: Less aggressive margin
      }
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  
  return (
    <div className="font-sans bg-slate-950 text-white selection:bg-[#22c55e] selection:text-black">
      <Navbar
        scrollToSection={scrollToSection}
        refs={{ homeRef, aboutRef, projectsRef, contactRef }}
        activeSection={activeSection}
      />

      <motion.section
        ref={homeRef}
        id="home"
        className="min-h-screen  flex items-center justify-center bg-[#070014] border-b border-slate-800"
      >
        <Home />
      </motion.section>

      <section
        ref={aboutRef}
        id="about"
        className="min-h-screen  flex items-center justify-center bg-[#120d2b] border-b border-slate-800"
      >
        <About />
      </section>

      <section
        ref={projectsRef}
        id="projects"
        className="min-h-screen  flex items-center justify-center bg-slate-900 border-b border-slate-800"
      >
        <Projects />
      </section>

      <section
        ref={contactRef}
        id="contact"
        className="min-h-screen  flex items-center justify-center bg-[#0a192f]"
      >
        
        <Contact />
      </section>
    </div>
  );
}

export default App;