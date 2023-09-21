'use client'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
    const [buttonText, setButtonText] = useState(<span className="cursor-pointer">Copy Email</span>);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('jportes.dev@gmail.com');
        setButtonText(<span className="cursor-pointer text-primary ">Email Copied</span>);
        setTimeout(() => {
            setButtonText(<span className="cursor-pointer">Copy Email</span>);
        }, 2000);
    };

    return (
        <nav className="fixed z-10 flex justify-end w-full text-white p-8 backdrop-blur-2xl">
            <ul className="flex gap-6 items-center">
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                {/* <li><a href="#skills">My story</a></li> */}
                <li><a href="/path/to/your/curriculum.pdf" download>Download CV</a></li>
                <li>
                    <motion.div
                        whileTap={{ scale: 0.9 }}
                        onClick={handleCopyEmail}
                    >
                        {buttonText}
                    </motion.div>
                </li>
                <li><a href="https://github.com/portsz"><FaGithub /></a></li>
                <li><a href="https://www.linkedin.com/in/joao-pedro-portes-301364184/"><FaLinkedin /></a></li>
            </ul>
        </nav>
    );
};

export default Navbar;