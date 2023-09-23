"use client"
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const SmallAbout = () => {
  return (
    <motion.div
      className="p-4 px-8 md:p-8 lg:p-12 bg-background text-white flex flex-col prose"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "-100px", once: true }}
    >
      <motion.h1 className="text-4xl font-bold text-primary" variants={childVariants}>
        My Developer Journey 🛤️
      </motion.h1>

      <motion.a href='/about' variants={childVariants} className='text-base pb-4 text-secondary'>Read the full story &#8618;</motion.a>
      {/* The Academic Foundation */}
      <motion.div className="flex flex-col pb-4" variants={childVariants}>
        <motion.h2 className="text-3xl font-semibold pb-2 text-zinc-300" variants={childVariants}>
          The Academic Foundation 🎓
        </motion.h2>
        <motion.ul className="list-disc list-inside text-zinc-400" variants={childVariants}>
          <motion.li variants={childVariants}>📚 Bachelor&apos;s in Computer Engineering</motion.li>
          <motion.li variants={childVariants}>💻 Mastered C, C++, algorithms, and data structures</motion.li>
          <motion.li variants={childVariants}>📘 Specialized topics: functional and object-oriented programming, databases</motion.li>
        </motion.ul>
      </motion.div>

      {/* The Unexpected Detour */}
      <motion.div className="flex flex-col pb-4" variants={childVariants}>
        <motion.h2 className="text-3xl font-semibold pb-2 text-zinc-300" variants={childVariants}>
          The Unexpected Detour 🔄
        </motion.h2>
        <motion.ul className="list-disc list-inside text-zinc-400" variants={childVariants}>
          <motion.li variants={childVariants}>🦠 COVID-19 led to a pivot toward financial markets</motion.li>
          <motion.li variants={childVariants}>📈 1.5 years in financial analytics, investments, and trading</motion.li>
          <motion.li variants={childVariants}>🌐 Added blockchain and cryptocurrencies to my skills</motion.li>
          <motion.li variants={childVariants}>🙏 Lost my father, paused education to support my family</motion.li>
        </motion.ul>
      </motion.div>

      {/* Stepping into the Real World */}
      <motion.div className="flex flex-col pb-4" variants={childVariants}>
        <motion.h2 className="text-3xl font-semibold pb-2 text-zinc-300" variants={childVariants}>
          Stepping into the Real World 🌍
        </motion.h2>
        <motion.ul className="list-disc list-inside text-zinc-400" variants={childVariants}>
          <motion.li variants={childVariants}>💼 Freelance programming and investment consulting</motion.li>
          <motion.li variants={childVariants}>📈 Tripled a client&apos;s portfolio value in 4 months</motion.li>
          <motion.li variants={childVariants}>👨‍💻 Back to coding and application development</motion.li>
        </motion.ul>
      </motion.div>

      {/* Skills and Expertise */}
      <motion.div className="flex flex-col pb-4" variants={childVariants}>
        <motion.h2 className="text-3xl font-semibold pb-2 text-zinc-300" variants={childVariants}>
          Skills and Expertise 🛠️
        </motion.h2>
        <motion.ul className="list-disc list-inside text-zinc-400" variants={childVariants}>
          <motion.li variants={childVariants}>🐍 Python</motion.li>
          <motion.li variants={childVariants}>🌐 JavaScript/TypeScript</motion.li>
          <motion.li variants={childVariants}>⚛️ Next.js/React.js</motion.li>
          <motion.li variants={childVariants}>🗄️ SQL and NoSQL databases</motion.li>
        </motion.ul>
      </motion.div>

      {/* Engineering Background */}
      <motion.div className="flex flex-col pb-4" variants={childVariants}>
        <motion.h2 className="text-3xl font-semibold pb-2 text-zinc-300" variants={childVariants}>
          Engineering Background 📐
        </motion.h2>
        <motion.ul className="list-disc list-inside text-zinc-400" variants={childVariants}>
          <motion.li variants={childVariants}>📚 Physics and calculus</motion.li>
          <motion.li variants={childVariants}>🧮 Differential equations, transforms</motion.li>
          <motion.li variants={childVariants}>⚡ Electrical circuits</motion.li>
        </motion.ul>
      </motion.div>

      {/* My Superpower */}
      <motion.div className="flex flex-col pb-4" variants={childVariants}>
        <motion.h2 className="text-3xl font-semibold pb-2 text-zinc-300" variants={childVariants}>
          My Superpower 🦸‍♂️
        </motion.h2>
        <motion.p className="text-zinc-400" variants={childVariants}>
          🌱 I can learn anything
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default SmallAbout;
