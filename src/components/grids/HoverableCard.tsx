"use client"
import React from "react";
import { motion } from "framer-motion";

const HoverableCard = ({ children }: any) => {
  return (
    <motion.div
      
    whileHover={{scale: 1.01}}
      className={`
	          bg-mouseHover relative 
            flex h-full w-full  flex-col items-center
            justify-center rounded-[10px] bg-zinc-700 shadow-lg 

			      before:absolute before:left-0 before:top-0 before:z-[3] before:h-full before:w-full before:rounded-lg before:opacity-0 before:transition-all before:duration-500 before:content-[''] after:absolute

            after:left-0 after:top-0 after:z-[1] after:h-full after:w-full after:rounded-lg after:opacity-0 after:transition-all after:duration-500 after:content-[''] before:hover:opacity-100 
			      after:group-hover:opacity-100`}
    >
      <motion.div 
      className=" inset-[1.5px] z-[2] h-[calc(100%-3px)] w-[calc(100%-3px)] rounded-lg bg-zinc-800 p-8">
        {children}
      </motion.div>
    </motion.div>
  );
};

export default HoverableCard;
