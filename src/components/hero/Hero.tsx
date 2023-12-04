"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import Image from "next/image";
import HeroCard from "./HeroCard";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

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
  const [buttonText, setButtonText] = useState(<span className="cursor-pointer">Know More</span>);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('jportes.dev@gmail.com');
        setButtonText(<span className="cursor-pointer text-tertiary ">Email Copied</span>);
        setTimeout(() => {
            setButtonText(<span className="cursor-pointer">Know More</span>);
        }, 2000);
    };
  

  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 15, // max tilt rotation (degrees)
    perspective: 2000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 0.9, // 2 = 200%, 1.5 = 150%, etc..
    speed: 300, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.3,.65,.81,.3)", // Easing on enter/exit.
  };

  return (
    <>
      {/* <HeroCard>
      
      </HeroCard> */}
      <Suspense fallback={<div className="flex h-[80vh] w-full items-center justify-center rounded-lg bg-opacity-100 bg-zinc-500 bg-cover bg-no-repeat 
        sm:p-24 backdrop-blur-lg"></div>}>
      <Tilt
        transitionEasing="cubic-bezier(0,.91,.42,1)"
        scale={0.95}
        perspective={2500}
        tiltMaxAngleX={10}
        gyroscope={true}
        className="flex h-[80vh] w-full items-center justify-center rounded-lg bg-opacity-100 bg-[url(/Hero.jpg)] bg-cover bg-no-repeat 
        sm:p-24 backdrop-blur-lg"
      >
          <div
            ref={cardsRef}
            className="flex flex-col  w-full justify-center items-center sm:items-start sm:p-4 p-2 font-bold text-white"            
          >
            <div
              className=" bg-mouseHoverBlur flex md:w-3/4 lg:w-1/2 gap-2 w-11/12 flex-col items-start sm:items-end justify-center rounded bg-background bg-opacity-30 sm:p-16 p-4 backdrop-blur-3xl
                      
                          before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[3] before:h-full before:w-full before:rounded-lg before:opacity-0 before:transition-all before:duration-500 before:content-['']

                          after:pointer-events-none after:absolute after:left-0 after:top-0 after:z-[1] after:h-full after:w-full after:rounded-lg after:opacity-0
                          after:transition-all after:duration-500 after:content-[''] before:hover:opacity-100
                          after:group-hover:opacity-100"
              
            >
              <h1 className="text-5xl">
                Hi! I&apos;m{" "}
                <span className=" bg-gradient-to-br from-primary via-tertiary  to-primary bg-clip-text text-transparent">
                  JP Portes
                </span>
              </h1>
              <h2 className="text-2xl  text-zinc-300">Software Engineer</h2>
              <a href="#about" className="text-zinc-300 bg-primary p-2 px-4 rounded-full scroll-smooth" onClick={handleCopyEmail}>
                <p className="text-black ">
                  {buttonText}
                </p>
              </a>
            </div>
          </div>
       
      </Tilt>
      </Suspense>
    </>
  );
};

export default Hero;
