"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [buttonText, setButtonText] = useState(
    <span className="cursor-pointer">Copy Email</span>,
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jportes.dev@gmail.com");
    setButtonText(
      <span className="cursor-pointer text-primary ">Email Copied</span>,
    );
    setTimeout(() => {
      setButtonText(<span className="cursor-pointer">Copy Email</span>);
    }, 2000);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed z-10 flex w-full justify-end p-6 text-white ">
      <ul
        className={`flex items-center gap-6 rounded p-2 px-4 backdrop-blur-2xl ${
          isOpen ? "w-full flex-col py-4 text-2xl " : "hidden sm:flex"
        }`}
      >
        <li>
          <a href="/#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="/#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/JPPortesCV.pdf" download>
            Download CV
          </a>
        </li>
        <li>
          <motion.div whileTap={{ scale: 0.9 }} onClick={handleCopyEmail}>
            {buttonText}
          </motion.div>
        </li>
        <li>
          <a href="https://github.com/portsz">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/joao-pedro-portes-301364184/">
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <div className="fixed flex flex-col gap-1 p-6 md:hidden">
        <motion.div
          className="h-[0.3rem] w-10 cursor-pointer rounded-lg bg-white"
          onClick={toggleMenu}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { rotate: 45, x: 2, y: 2 },
            closed: { rotate: 0, x: 0, y: 0 },
          }}
        />
        <motion.div
          className="h-[0.3rem] w-10 cursor-pointer rounded-lg bg-white"
          onClick={toggleMenu}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 0 },
            closed: { opacity: 1 },
          }}
        />
        <motion.div
          className="h-[0.3rem] w-10 cursor-pointer rounded-lg bg-white"
          onClick={toggleMenu}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { rotate: -45, x: 2, y: -2 },
            closed: { rotate: 0, x: 0, y: 0 },
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
