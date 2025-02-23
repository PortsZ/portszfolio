"use client";
import React, { useRef, useEffect } from "react";

const CardGrid = ({ children }: any) => {
  //
  //
  //
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // If cardsRef.current exists, find all elements with class "bg-mouseHover" within it
      const cards = cardsRef.current?.getElementsByClassName("bg-mouseHover");

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
  }, []); // The empty dependency array ensures this effect runs once after the initial render
  //
  //
  //

  return (
    <div
      id="cards"
      ref={cardsRef}
      className="group grid auto-rows-max h-full w-full sm:p-24 sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-2 p-8"
    >
      {children}
    </div>
  );
};

export default CardGrid;
