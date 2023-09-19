import React from "react";
import HoverableCard from "@/components/grids/HoverableCard";
import Hero from "@/components/hero/Hero";
import Stack from "@/components/stack/Stack";
import CardFlex from "@/components/flex/CardFlex";
import SmallAbout from "@/components/about/SmallAbout";
import Portfolio from "@/components/portfolio/Portfolio";
//
//
//
//

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start scroll-smooth">
      <section className="flex min-h-screen w-full flex-grow items-center justify-center p-2 ss:p-8 sm:p-24">
        <Hero />
      </section>
      <section id="about" className="flex w-full items-center justify-center">
        <SmallAbout />
      </section>

      <section
        id="stack"
        className="flex w-full items-center justify-center ss:p-8 sm:p-24"
      >
        <CardFlex>
          <HoverableCard>
            <Stack />
          </HoverableCard>
        </CardFlex>
      </section>

      <section id='portfolio' className="flex w-full justify-center">
        <Portfolio />
      </section>
    </main>
  );
}
