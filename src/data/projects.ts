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

//!================================================================================================
export const antares = {
  id: 'antares',
  name: "Antares Solar",
  features: antaresFeatures,
  techStack: antaresTechStack,
  preview: {
    logo: "/images/antares-logo.png",
    title: "Antares Solar",
    description: "A solar energy company that offers a PV Kit Sizer and a proposal generator.",
    shortStack: "Laravel, Python, Next.js, Prisma, Planetscale, MySQL, AWS, Vercel",
  }
};

export const martPlus = {
  id: 'mart-plus',
  name: "Mart Plus",
  features: antaresFeatures,
  techStack: antaresTechStack,
  preview: {
    logo: "/images/MartPlus-logo.png",
    title: "Mart Plus",
    description: "A Supermaket CRUD with a shopping cart and a checkout system.",
    shortStack: "Next.js, Prisma, Planetscale, MySQL, Vercel",
  }
};




export const projects = [antares]