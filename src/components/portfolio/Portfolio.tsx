"use client";

import React, { useEffect, useState } from "react";
import CardGrid from "../grids/CardGrid";
import HoverableCard from "../grids/HoverableCard";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import { ProjectInterface } from "@/data/projectTypes";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] =
    useState<ProjectInterface | null>(null);

  useEffect(() => {
    console.log(selectedProject);
  }, [selectedProject]);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <h2 className="text-center text-3xl font-bold">My Portfolio</h2>
      <CardGrid>
        {projects &&
          projects.map((project) => {
            return (
              <motion.div
                layoutId={project.id}
                key={project.id}
                onClick={() => setSelectedProject(project)}
              >
                <HoverableCard>
                  <div className="flex h-full w-full items-center justify-center gap-4 ">
                    <img
                      src={project.preview.logo}
                      className="h-[18vw] w-[18vw] rounded-full object-cover md:h-[8vw]  md:w-[8vw] "
                    />
                    <div className="">
                      <h2 className="text-2xl font-bold text-secondary">
                        {project.preview.title}
                      </h2>
                      <p className="text-sm text-zinc-300">
                        {project.preview.description}
                      </p>
                      <p className="text-sm text-zinc-400">
                        {project.preview.shortStack}
                      </p>
                    </div>
                  </div>
                </HoverableCard>
              </motion.div>
            );
          })}
      </CardGrid>
      {/*  */}
      <AnimatePresence>
        {selectedProject && (
          <div
            onClick={() => {
              setSelectedProject(null);
            }}
            className="fixed top-0 z-10 flex h-full w-full items-center justify-center bg-background bg-opacity-30 backdrop-blur-sm"
          >
            <motion.div
              layoutId={selectedProject.id}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-40 max-h-[80vh] overflow-auto p-4 drop-shadow-contrast2"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              
                onClick={() => {
                  setSelectedProject(null);
                }} // Call closeCard function when button is clicked
                className="absolute right-0 top-0 m-2 rounded-full bg-primary text-2xl w-10 h-10 p-1 text-white" // Style as needed
              >
                X
              </motion.button>

              <ProjectCard project={selectedProject} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
