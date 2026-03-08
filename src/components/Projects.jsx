import React from 'react'
import { motion } from 'framer-motion';
import { Github, ExternalLink } from "lucide-react";


function Projects() {

    const projects = [
        {
            title: "Travel Booking Website",
            description: "A modern travel booking platform that allows users to browse destinations, plan trips, and book travel packages easily. It features a responsive UI, secure backend APIs, and a MongoDB database for managing users and bookings.",
            image:"/src/assets/website.png",
            tech: ["React", "Node.js", "MongoDb"],
            github: "https://github.com/Amit7831/Travel_Booking_System",
            live: "",
        }
    ]

    const container = {
        hidden: {},
        show: {
            transition: {

                staggerChildren: 0.25,
            },
        },
    };

    const card = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        },
    };

    return (
        <section className='min-h-screen w-full bg-gradient-to-tr from-[#421b9b] via-[#a06ee1] to-[#cbbcf6] text-white py-20 px-6'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-16'>
                    <h1 className='text-4xl font-bold'>
                        Latest <span className='text-green-400'>Projects</span>
                    </h1>
                    <p className='text-gray-100 mt-6 max-w-xl mx-auto'>
                        A collection of my recent work, showcasing innovative solutions
                        and clean code. Click to explore details.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-8 justify-center [grid-template-columns:repeat(auto-fit,minmax(280px,350px))]"
                >
                    {
                        projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={card}
                                whileHover={{ y: -10 }}
                                className="bg-[#030b1d] rounded-xl overflow-hidden border border-gray-800 shadow-lg group">
                                <div className='overflow-hidden'>
                                    <img src={project.image}
                                        alt={project.title}
                                        className='group-hover:scale-110 transition duration-500 w-full h-56 object-cover'
                                    />
                                </div>

                                <div className='p-6'>
                                    <h3 className='text-xl font-bold mb-3 flex items-center gap-2'>
                                        {project.title}
                                    </h3>
                                    <p className='text-gray-400 text-sm mb-4'>
                                        {project.description}
                                    </p>

                                    <div className='flex flex-wrap gap-2 mb-5'>
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className='text-xs px-3 py-1 bg-gray-800 rounded-full'
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className='flex gap-4'>
                                        <a
                                            href={project.github}
                                            className='text-gray-300 hover:text-green-400 transition'
                                        >
                                            <Github size={20} />
                                        </a>
                                        <a
                                            href={project.live}
                                            className='text-gray-300 hover:text-green-400 transition'
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    }

                </motion.div>

            </div>
        </section>
    )
}

export default Projects