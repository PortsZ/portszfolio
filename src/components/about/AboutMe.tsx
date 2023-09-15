// components/AboutMe.js
import React from 'react';

const AboutMe = () => {
  return (
    <div className="p-8 w-full flex flex-col prose prose-h1:text-white prose-h2:text-zinc-300 prose-p:text-zinc-400 prose-indigo">
      <h1 className="text-4xl font-bold mb-4">My Developer Journey</h1>

      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-2">The Academic Foundation (2017-2020)</h2>
        <p>
          My odyssey into the world of software development began in 2017, when I enrolled in a Bachelor's program in Computer Engineering.
          My educational journey was steeped in traditional methods: we often wrote code on paper before implementing it on machines.
          This rigorous academic environment laid a solid foundation for my understanding of programming.
          From mastering C and diving into algorithms and data structures, to delving into code complexity and object-oriented programming in C++, I acquired a well-rounded skill set.
          My academic career also gave me insights into specialized topics like compilers and databases.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-2">The Unexpected Detour (2020-2021)</h2>
        <p>
          Just as I was gaining momentum, the Covid-19 pandemic struck, forcing my university to shut down in 2020.
          This unexpected hiatus led me to pivot toward the financial markets. For one and a half years, I immersed myself in financial analytics, investments, and trading, diversifying my skill set while waiting for academic life to resume.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-2">A Life-Changing Return (2021)</h2>
        <p>
          In 2021, my university reopened with a plan to make up for lost time through three consecutive semesters.
          I eagerly resumed my academic pursuits while also continuing my studies of financial markets, adding blockchain and cryptocurrencies to my repertoire.
          However, tragedy struck on May 24th, 2021, when I lost my father to Covid-19. The financial strain necessitated a pause in my education as I stepped up to support my family.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-2">Stepping into the Real World</h2>
        <p>
          I took on freelance programming jobs and started offering investment consulting services.
          Opportunity knocked when a client of my mother's hair salon learned about my cryptocurrency expertise.
          Starting in September 2021, I managed this client's investments, nearly tripling the portfolio value within just four months.
          This journey continued until the end of the cryptocurrency market rally in April 2022.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-2">Coming Full Circle</h2>
        <p>
          Despite the detours and challenges, I find myself returning to my roots as a software engineer.
          I've since shifted my focus back to coding, developing applications and continually honing my programming skills.
        </p>
      </div>

      <div className="mb-8">
        <p>
          At my core, I am an engineer. This is my story, and it's far from over.
        </p>
      </div>

    </div>
  );
};

export default AboutMe;
