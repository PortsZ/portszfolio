"use client";
import React from "react";
import { motion } from "framer-motion";

const StackInfo = () => {
  return (
    <motion.div className="relative z-50 flex w-full  items-center justify-center sm:p-24">
      <div className="p-auto container">
        <h2 className="p-4 text-center text-3xl font-bold">🛠️ My Tech Stack</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-quaternary bg-opacity-40 p-6 text-center shadow-lg backdrop-blur-2xl">
            <span className="text-4xl">🐍</span>
            <h3 className="mt-4 text-xl font-semibold">Python</h3>
          </div>
          <div className="rounded-lg bg-quaternary bg-opacity-40 p-6 text-center shadow-lg backdrop-blur-2xl">
            <span className="text-4xl">🏗️</span>
            <h3 className="mt-4 text-xl font-semibold">C/C++</h3>
          </div>
          <div className="rounded-lg bg-quaternary bg-opacity-40 p-6 text-center shadow-lg backdrop-blur-2xl">
            <span className="text-4xl">🌐</span>
            <h3 className="mt-4 text-xl font-semibold">Node.js</h3>
          </div>
          <div className="rounded-lg bg-quaternary bg-opacity-40 p-6 text-center shadow-lg backdrop-blur-2xl">
            <span className="text-4xl">⚛️</span>
            <h3 className="mt-4 text-xl font-semibold">React/Next.js</h3>
          </div>
          <div className="rounded-lg bg-quaternary bg-opacity-40 p-6 text-center shadow-lg backdrop-blur-2xl">
            <span className="text-4xl">🎨</span>
            <h3 className="mt-4 text-xl font-semibold">Tailwind CSS</h3>
          </div>

          <div className="rounded-lg bg-quaternary bg-opacity-40 p-6 text-center shadow-lg backdrop-blur-2xl">
            <span className="text-4xl">📦🗄️</span>
            <h3 className="mt-4 text-xl font-semibold">
              SQL & NoSQL Databases
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StackInfo;
