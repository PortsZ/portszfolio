"use client";
import { ProjectInterface } from "@/data/projectTypes";
import { motion } from "framer-motion";

const ProjectCard = ({ project }: { project: ProjectInterface }) => {
  return (
    <motion.div className="flex flex-col items-start justify-center rounded-md bg-background p-4 py-12 sm:flex-row">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:w-[40vw]"
      >
        <motion.h3
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
          className="px-4 pb-4 text-center text-2xl font-semibold text-white"
        >
          {project.preview.title}
        </motion.h3>
        <img
          src={project.mockup}
          className="h-full w-full rounded-lg object-contain"
        />
        <div className=" flex w-full gap-2 p-4 px-4  sm:px-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={!project.preview.link}
            onClick={() => window.open(project.preview.link, "_blank")}
            className={` rounded bg-quaternary p-2 px-4 font-semibold  ${
              project.preview.link  ? "text-white" :  "pointer-events-none bg-opacity-60 text-zinc-300" 
            }` }
          >
            View App
          </motion.button>
          <motion.button
            disabled={!project.preview.code}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(project.preview.code, "_blank")}
            className={` rounded bg-quaternary p-2 px-4 font-semibold ${
              project.preview.code ? "text-zinc-100" :  "pointer-events-none bg-opacity-60 text-zinc-300" 
            }`}
          >
            View Code
          </motion.button>
        </div>
        <h2 className="px-4 text-lg  text-secondary sm:px-8">
          Responsabilities
        </h2>
        <p className="w-full px-4  pb-8 text-sm text-zinc-300 sm:px-8">
          {project.responsibilities}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="rounded-lg p-4 text-zinc-300 "
      >
        <h4 className="mb-1 text-lg font-semibold text-secondary">
          Tech Stack:
        </h4>
        <ul className="list-inside list-disc pb-8 text-sm">
          {project.techStack.map((tech, index) => (
            <li key={index}>🔧 {tech}</li>
          ))}
        </ul>
        <h4 className="mb-1 text-lg font-semibold text-secondary">Features:</h4>
        <ul className="list-inside list-disc text-sm">
          {project.features.map((feature, index) => (
            <li key={index}>✨ {feature}</li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
