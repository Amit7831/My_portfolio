import React from 'react'
import {
  FileText, Code2, Database, Terminal,
  Globe, Layout, Cpu, ExternalLink
} from 'lucide-react';
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  ];

  const languages = [
    { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  ];
  const tools = [
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Vercel', logo: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png' },
    { name: 'Netlify', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 5 },
    show: {
      opacity: 1,
      x: -6,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div
      className='min-h-screen w-full bg-gradient-to-bl from-[#4f46e5] via-[#4338ca] to-[#831843] py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-5xl mx-auto'>

        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold text-gray-100 sm:text-5xl mb-4'>About Me</h1>
          <div className='w-20 h-1 bg-blue-600 mx-auto rounded-full'></div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
           viewport={{ once: true, amount: 0.3 }}
          className='grid grid-cols-1 md:grid-cols-3 gap-20'>

          <div className='md:col-span-1'>
            <div className=' bg-white p-6 rounded-2xl shadow-sm border border-gray-300 sticky top-8'>
              <motion.img src="src/assets/profilePhoto.png"
                alt="Amitranjan"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.1 }}
                className='w-30 h-30 rounded-full mx-auto mb-6  object-fill  border-4 border-blue-400' />
              <h2 className='text-xl font-bold text-center text-gray-800'>Amitranjan Malik</h2>
              <p className='text-blue-600 text-sm font-medium text-center mb-6'>MCA Candidate & MERN Developer</p>

              <p className='text-gray-600 text-sm leading-relaxed mb-6'>
                Passionate about building scalable web applications. With a background in AI/ML and a current focus on the MERN stack, I love bridging the gap between complex logic and beautiful UI.
              </p>
              <div className='flex  flex-col gap-5'>

              <motion.a href="/MY Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                className='flex items-center justify-center gap-2 w-full bg-gray-900 text-white py-3 px-4 rounded-xl hover:bg-gray-800 transition-all font-medium' >
                <FileText size={18} />
                View Full Resume
                </motion.a>
                
              <motion.a href="/MY Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                download
                className='flex items-center justify-center gap-2 w-full bg-green-400 text-white py-3 px-4 rounded-xl hover:bg-green-600 transition-all font-medium' >
                <FileText size={18} />
                Download Full Resume
              </motion.a>
              </div>
            </div>
          </div>

          <div className='md:col-span-2 space-y-10'>

            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <div className='flex items-center gap-2 mb-6'>
                <Layout className='text-green-400 ' size={24} />
                <h3 className='text-2xl font-bold text-gray-300'>Tech Stack</h3>
              </div>
              <div className='grid grid-cols-3 sm:grid-cols-4 gap-6'>
                {skills.map((skill) => (
                  <motion.div
                    key={skill.logo}
                    variants={item}
                    whileHover={{ scale: 1.1 }}
                    // transition={{ type: "spring", stiffness: 200 }}
                    className='flex flex-col items-center group '>
                    <div className='p-4 bg-gray-200 rounded-xl shadow-sm border border-gray-50 group-hover:shadow-md hover:bg-fuchsia-500  transition-shadow mb-2'>
                      <img src={skill.logo} alt={skill.name} className='w-10 h-10 object-contain ' />
                    </div>
                    <span className='text-xs font-semibold text-gray-50 uppercase tracking-wider'>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>


            <section>
              <div className='flex items-center gap-2 mb-6'>
                <Terminal className='text-green-400 ' size={24} />
                <h3 className='text-2xl font-bold text-gray-300'>Programming Languages</h3>
              </div>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className='flex gap-8'>
                {languages.map((lang) => (
                  <motion.div
                    key={lang.logo}
                    variants={item}
                    whileHover={{ scale: 1.1 }}
                    // transition={{ type: "spring", stiffness: 200 }}
                    className='flex flex-col items-center group '>
                    <div className='p-4 bg-gray-100 rounded-xl shadow-sm border border-gray-50 group-hover:shadow-md hover:bg-green-400  transition-shadow mb-2'>
                      <img src={lang.logo} alt={lang.name} className='w-10 h-10 object-contain ' />
                    </div>
                    <span className='text-xs font-semibold text-gray-50 uppercase tracking-wider'>{lang.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </section>

            <section>
              <div className='flex items-center gap-2 mb-6'>
                <Globe className='text-green-400 ' size={24} />
                <h3 className='text-2xl font-bold text-gray-300'>Tools & Hosting</h3>
              </div>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className='flex gap-8'>
                {tools.map((toll) => (
                  <motion.div
                    key={toll.logo}
                    variants={item}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className='flex flex-col items-center group '>
                    <div className='p-4 bg-gray-50 rounded-xl shadow-sm border border-gray-50 group-hover:shadow-md hover:bg-blue-500  transition-shadow mb-2'>
                      <img src={toll.logo} alt={toll.name} className='w-10 h-10 object-contain ' />
                    </div>
                    <span className='text-xs font-semibold text-gray-50 uppercase tracking-wider'>{toll.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default About