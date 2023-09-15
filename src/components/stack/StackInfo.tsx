"use client"
import React from 'react'
import { motion } from 'framer-motion'

const StackInfo = () => {
  return (
    <motion.div className="flex w-full items-center justify-start  sm:p-24 relative z-50">
        <div className="container p-auto">
    <h2 className="p-4 text-center text-3xl font-bold">
      🛠️ My Tech Stack
    </h2>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-lg bg-quaternary bg-opacity-40 backdrop-blur-2xl p-6 text-center shadow-lg">
        <span className="text-4xl">🐍</span>
        <h3 className="mt-4 text-xl font-semibold">Python</h3>
      </div>
      <div className="rounded-lg bg-quaternary bg-opacity-40 backdrop-blur-2xl p-6 text-center shadow-lg">
        <span className="text-4xl">🌐</span>
        <h3 className="mt-4 text-xl font-semibold">Node.js</h3>
      </div>
      <div className="rounded-lg bg-quaternary bg-opacity-40 backdrop-blur-2xl p-6 text-center shadow-lg">
        <span className="text-4xl">⚛️</span>
        <h3 className="mt-4 text-xl font-semibold">React/Next.js</h3>
      </div>
      <div className="rounded-lg bg-quaternary bg-opacity-40 backdrop-blur-2xl p-6 text-center shadow-lg">
        <span className="text-4xl">🎨</span>
        <h3 className="mt-4 text-xl font-semibold">Tailwind CSS</h3>
      </div>
      <div className="rounded-lg bg-quaternary bg-opacity-40 backdrop-blur-2xl p-6 text-center shadow-lg">
        <span className="text-4xl">🗄️</span>
        <h3 className="mt-4 text-xl font-semibold">SQL Databases</h3>
      </div>
      <div className="rounded-lg bg-quaternary bg-opacity-40 backdrop-blur-2xl p-6 text-center shadow-lg">
        <span className="text-4xl">📦</span>
        <h3 className="mt-4 text-xl font-semibold">NoSQL Databases</h3>
      </div>
    </div>
    </div>
  </motion.div>
  )
}

export default StackInfo