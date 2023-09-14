"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import HeroCard from "./HeroCard";

const Hero = () => {
  const cardsRef = useRef<HTMLDivElement | null>(null);
  //
  //
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // If cardsRef.current exists, find all elements with class "bg-mouseHoverBlur" within it
      const cards =
        cardsRef.current?.getElementsByClassName("bg-mouseHoverBlur");

      if (cards) {
        for (const card of Array.from(cards)) {
          const rect = (card as HTMLElement).getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

          (card as HTMLElement).style.setProperty("--mouse-x", x + "px");
          (card as HTMLElement).style.setProperty("--mouse-y", y + "px");
        }
      }
    };

    // Add the event listener to the cardsRef element
    if (cardsRef.current) {
      cardsRef.current.addEventListener("mousemove", handleMouseMove);
    }

    // Remove the event listener when the component unmounts
    return () => {
      if (cardsRef.current) {
        cardsRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);
  //
  //

  return (
    <HeroCard>
      <div className="flex h-[80vh] w-full items-center justify-center rounded-lg bg-opacity-100 bg-[url(/Hero.jpg)] bg-cover bg-no-repeat p-24 backdrop-blur-lg">
        <div
          ref={cardsRef}
          className="flex w-full justify-start  p-4 font-bold text-white"
        >
          <div
            className=" bg-mouseHoverBlur flex w-1/2 flex-col items-end justify-center rounded bg-background bg-opacity-30 p-16 backdrop-blur-3xl
        
          before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[3] before:h-full before:w-full before:rounded-lg before:opacity-0 before:transition-all before:duration-500 before:content-['']
          
          after:pointer-events-none after:absolute after:left-0 after:top-0 after:z-[1] after:h-full after:w-full after:rounded-lg after:opacity-0
          after:transition-all after:duration-500 after:content-[''] before:hover:opacity-100
          after:group-hover:opacity-100"
          >
            <h1 className="text-5xl">
              Hi! I'm{" "}
              <span className=" bg-gradient-to-br from-primary via-tertiary  to-primary bg-clip-text text-transparent">
                JP Portes
              </span>
            </h1>
            <h2 className="text-2xl  text-zinc-300">Fullstack Developer</h2>
            <a href="/" className="text-zinc-300 hover:text-secondary">
              <p className="text-sm italic underline underline-offset-2 ">
                Know More
              </p>
            </a>
          </div>
        </div>
      </div>
    </HeroCard>
  );
};

export default Hero;
