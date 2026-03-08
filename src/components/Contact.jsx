import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiDevdotto } from "react-icons/si";
import { IoSend } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { useRef } from 'react';


function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(
            () => {
                alert("Message Sent Successfully");
                form.current.reset();

            },
            () => {
                alert("Faild to send message");

            }

        );

    }
    return (
        <section className='min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-[#7900ff] via-[#548cff] to-[#93ffd8] text-white px-6 py-16'>
            <div className='max-w-6xl w-full bg-[#020617] border border-slate-800 rounded-xl shadow-lg grid md:grid-cols-2 gap-20 p-8'>
                <div>
                    <h2 className='flex items-center gap-2 text-2xl font-semibold mb-6 text-green-400'>
                        <FaEnvelope />Send a message
                    </h2>
                    <form ref={form}
                        onSubmit={sendEmail}
                        className='space-y-5'>
                        <div>
                            <label className='block text-sm mb-2 text-gray-300'>Name</label>
                            <input type="text"
                                name='name'
                                placeholder='Your Name'
                                className='w-full bg-[#1e293b] border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-green-400 transition' />
                        </div>
                        <div>
                            <label className='block text-sm mb-2 text-gray-300'>Email</label>
                            <input type="email"
                                name='email'
                                placeholder='Your Email'
                                className='w-full bg-[#1e293b] border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-green-400 transition' />
                        </div>
                        <div>
                            <label className='block text-sm mb-2 text-gray-300'>Message</label>
                            <textarea rows="5"
                                name='message'
                                placeholder='Your message'
                                className='w-full bg-[#1e293b]  border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-green-400 transition'></textarea>
                        </div>

                        <button type='submit'
                            className='w-full flex items-center justify-center gap-2 bg-green-600 transition px-6 py-3 rounded-lg font-semibold'>
                            <IoSend />Send Message
                        </button>
                    </form>
                </div>

                <div className='flex flex-col gap-10'>
                    <div>
                        <h2 className='text-2xl font-semibold mb-6'>Contact Info</h2>
                        <div className='space-y-4 text-gray-300'>
                            <p className='flex items-center gap-3'>
                                <FaEnvelope className='text-green-400' />
                                amitranjanmalik2003@gmail.com
                            </p>
                            <p className='flex items-center gap-3'>
                                <FaPhoneAlt className='text-green-400' />
                                +91 9861373578
                            </p>
                            <p>
                                <FaMapMarkerAlt className='text-green-400' />
                                Bhubaneswar, Odisha
                            </p>
                        </div>
                    </div>

                    <div className='m'>
                        <h3 className='text-xl mb-4 font-semibold'>
                            Contact with Me
                        </h3>
                        <div className='flex gap-5 text-xl'>
                            <a href="https://github.com/Amit7831"
                                className='hover:text-green-400 transition transform hover:scale-110'>
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/amitranjan-malik-11a600397"
                                className='hover:text-green-400 transition transform hover:scale-110'>
                                <FaLinkedin />
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact