import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const text = "Amitranjan Malik";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className=" min-h-screen w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20
     px-6 md:px-20 bg-[#070014] text-white overflow-hidden py-20 md:py-0">

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-auto z-10 text-center md:text-left"
      >
        <div className="max-w-xl">

          <h1 className="text-2xl md:text-4xl text-fuchsia-400 font-bold  mb-2">
            Hi, I am 
          </h1>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent tracking-tight mb-2">
            {displayText}
          </h1>
      
         
          <h2 className="text-2xl md:text-3xl mt-3 font-semibold">
            Aspiring MERN Stack
            <span className="text-purple-500">
              <TypeAnimation
            sequence={[
              " Developer",
                  2000,
                  "",
              
             
            ]}
            speed={10}
            repeat={Infinity}
            cursor={true}
          />
            </span>
          </h2>

          <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed">
            I am currently pursuing MCA and passionate about building modern web applications.
            I have completed an internship in AI/ML and am currently focusing on MERN Stack development (MongoDB, Express, React, Node.js).</p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-5 mt-8">

            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 rounded-xl text-lg font-bold bg-gradient-to-r  from-purple-600 to-pink-500 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-purple-500/20">
              Project
            </button>
            <button
              onClick={() => { scrollToSection('contact') }}
              className="px-8 py-3 rounded-xl text-lg font-bold border border-pink-500  hover:scale-105 hover:bg-pink-500/10 active:scale-95 transition-all">
              Contact me
            </button>

          </div>

        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div

        initial={{ opacity: 0, scale: 0.8 }}

        animate={{ opacity: 1, scale: 1 }}

        transition={{ duration: 1 }}

        className="relative flex justify-center items-center"

      >

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-pink-500 to-blue-500 blur-[60px] md:blur-[80px] rounded-3xl opacity-80 "></div>

        <div className="relative p-[5px] rounded-3xl bg-gradient-to-br from-pink-500 to-blue-500 shadow-2xl">

          <img

            src="/profilePhoto.png"

            alt="avatar"

            className="w-[300px] md:[350px] h-auto rounded-3xl object-cover"

          />

        </div>



      </motion.div>

    </section>
  );
};

export default Home;
