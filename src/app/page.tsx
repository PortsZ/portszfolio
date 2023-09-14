import React from "react";
import HoverableCard from "@/components/grids/HoverableCard";
import CardGrid from "@/components/grids/CardGrid";
import Hero from "@/components/hero/Hero";
import Stack from "@/components/stack/Stack";
import CardFlex from "@/components/flex/CardFlex";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <section className="flex min-h-screen w-full flex-grow items-center justify-center p-8 sm:p-24">
        <Hero />
      </section>
      <section className="flex w-full items-center justify-center"></section>
      <section className="flex w-full items-center justify-center p-8 sm:p-24">
        <CardFlex>
          <HoverableCard>
            <Stack />
          </HoverableCard>
        </CardFlex>
      </section>
      <section className="flex w-full justify-center">
        <CardGrid>
          <HoverableCard />
          <HoverableCard />
          <HoverableCard>TEST</HoverableCard>
        </CardGrid>
      </section>
    </main>
  );
}
