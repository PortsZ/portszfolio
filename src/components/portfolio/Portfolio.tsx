"use client";

import React, { useState } from "react";
import CardGrid from "../grids/CardGrid";
import HoverableCard from "../grids/HoverableCard";
import ProjectCard from "./ProjectCard";
import { AnimatePresence, motion } from "framer-motion";

const antaresTechStack = [
  "Laravel and Python for sizing backend microservice (AWS)",
  "Next.js/Prisma/Planetscale/MySQL for frontend and backend (Vercel)",
  "ADM dashboard using Laravel and Next.js (Vercel)",
  "PDF generator with Next.js and Puppeteer (AWS)",
  "Animations with framer-motion and three.js",
  "Prototyping on Figma",
];

const antaresFeatures = [
  "PV Kit Sizer based on energy bill data",
  "Interactive proposal generation",
  "Payment plans with Stripe",
  "Authentication with providers and email confirmation",
  "Shareable PDF proposals",
  "Fully responsive with a configurable dashboard",
];

const Portfolio = () => {
  const [selectedId, setSelectedId] = useState("");

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <h2 className="text-center text-3xl font-bold">My Portfolio</h2>
      <CardGrid>
        {/* <HoverableCard>
          <ProjectCard
            title='Antares'
            description='A PV Kit sizer and proposal generator.'
            techStack={antaresTechStack}
            features={antaresFeatures}
          />
        </HoverableCard> */}

        <motion.div layoutId={"1"} onClick={() => setSelectedId("1")}>
          <HoverableCard>TEST</HoverableCard>
        </motion.div>
        <motion.div layoutId={"2"} onClick={() => setSelectedId("2")}>
          <HoverableCard>TEST </HoverableCard>
        </motion.div>
      </CardGrid>
      {/*  */}
      <AnimatePresence>
        {selectedId && (
          <div
            onClick={() => {
              setSelectedId("");
            }}
            className="fixed top-0 z-10 flex h-full w-full items-center justify-center bg-background bg-opacity-30 backdrop-blur-sm"
          >
            <motion.div
              layoutId={selectedId}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="drop-shadow-contrast2 relative z-20"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {" "}
              <HoverableCard>
                <ProjectCard
                  title="Antares"
                  description="A PV Kit sizer and proposal generator."
                  techStack={antaresTechStack}
                  features={antaresFeatures}
                />
              </HoverableCard>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
