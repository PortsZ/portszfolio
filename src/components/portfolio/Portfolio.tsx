"use client";

import React, { useEffect, useState } from "react";
import CardGrid from "../grids/CardGrid";
import HoverableCard from "../grids/HoverableCard";
import { AnimatePresence, motion } from "framer-motion";
import {projects} from "../../data/projects";
import ProjectCard from "./ProjectCard"
import { ProjectInterface } from "@/data/projectTypes";



const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectInterface | null>(null);

  useEffect(() => {
    console.log(selectedProject);
    
  }, [selectedProject]);

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <h2 className="text-center text-3xl font-bold">My Portfolio</h2>
      <CardGrid>
        {projects && projects.map((project) => {
          return (
            <motion.div
              layoutId={project.id}
            
              key={project.id}
              onClick={() => setSelectedProject(project)}
            >
              <HoverableCard>
                <div className="">
                  <h2 className="text-2xl text-secondary font-bold">{project.preview.title}</h2>
                  <p className="text-sm text-zinc-300">{project.preview.description}</p>
                  <p className="text-sm text-zinc-400">{project.preview.shortStack}</p>
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
              className="drop-shadow-contrast2 relative z-20"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <HoverableCard>
                <div>
                
                  <ProjectCard
                    title={selectedProject.preview.title}
                    techStack={selectedProject.techStack}
                    features={selectedProject.features}
                  
                  />
                  
                </div>
              </HoverableCard>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;