"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

const StackIcon = () => {
  return (
    <motion.div
          variants={container}
          initial="hidden"
          whileInView={"show"}
          className="flex min-h-[20rem] flex-col items-center justify-center"
        >
          <motion.div
            variants={item}
            initial={{ y: 85 }}
            whileInView={{ y: 30, x: 23, rotate: 14 }}
          >
            <Image
              src="/assets/rectangle.svg"
              alt="rectangle"
              width={158}
              height={38}
            />
          </motion.div>
          <motion.div
            variants={item}
            initial={{ y: 90 }}
            whileInView={{ y: 49, x: 12, rotate: 10 }}
          >
            <Image
              src="/assets/rectangle.svg"
              alt="rectangle"
              width={158}
              height={38}
            />
          </motion.div>
          <motion.div
            variants={item}
            initial={{ y: 95 }}
            whileInView={{ y: 65, x: 4, rotate: 6 }}
          >
            <Image
              src="/assets/rectangle.svg"
              alt="rectangle"
              width={158}
              height={38}
            />
          </motion.div>
          <motion.div
            variants={item}
            initial={{ y: 100 }}
            whileInView={{ y: 80, rotate: 2 }}
          >
            <Image
              src="/assets/rectangle.svg"
              alt="rectangle"
              width={158}
              height={38}
            />
          </motion.div>
          <motion.div
            variants={item}
            initial={{ y: 105 }}
            whileInView={{ y: 95 }}
          >
            <Image
              src="/assets/rectangle.svg"
              alt="rectangle"
              width={158}
              height={38}
            />
          </motion.div>

          <Image src="/assets/stack.svg" alt="stack" width={237} height={144} />
        </motion.div>
  )
}

export default StackIcon