import { ProjectInterface } from "./projectTypes";



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

//*================================================================================================
export const antares = {
  id: 'antares',
  features: antaresFeatures,
  techStack: antaresTechStack,
  mockup: "/antares/antares-mockup.png",
  responsibilities: 'Led the development and deployment of Antares Solar, a software for Brazilian installers, focused on PV Kit Sizing and proposal generation , utilizing technologies such as Laravel, Python, Next.js, Prisma, and more. Managed seamless integration of front and back-end technologies, ensuring robust performance and reliability. Administered advanced database and AWS solutions, emphasizing data security and optimized performance. Oversaw the entire project lifecycle, collaborating with cross-functional teams to align on project goals and deliverables.',
  
  preview: {
    logo: "/antares/antares-logo.png",
    title: "Antares Solar",
    link: "https://antaressolar.com",
    figma: "https://www.figma.com/file/kIw5lki20Ieh2fLl6qxiW0/Dimensionar?type=design&node-id=0%3A1&mode=design&t=1Za6i5kYZCirWmhY-1",
    description: "A solar energy software that offers a PV Kit Sizer and a proposal generator.",
    shortStack: "Laravel, Python, Next.js, Prisma, Planetscale, MySQL, AWS, Vercel",
  }
};

export const martPlus = {
  id: 'mart-plus',
  features: ['CRUD', 'Authentication', 'Databases', 'Beautiful and responsive Front-end'],
  techStack: antaresTechStack,
  mockup: "/mart-plus/mart-plus-mockup.png",
  responsibilities: 'Engineered a comprehensive CRUD system for a supermarket application, facilitating seamless management of products, categories and tax. Implemented robust shopping cart and checkout functionalities, allowing users to interact, add products, and manage transactions efficiently. Executed proficient deployment of the project on Vercel, ensuring optimal performance and user experience.',
  preview: {
    logo: "/mart-plus/mart-plus-logo.png",
    title: "Mart Plus",
    link: "https://mart-plus.vercel.app/",
    code: "https://github.com/PortsZ/mart-plus",	
    description: "A Supermaket CRUD with a shopping cart and a checkout system.",
    shortStack: "Next.js, Prisma, Planetscale, MySQL, Vercel",
  }
};

export const volumeSpikeBot = {
  id: 'volume-spike-bot',
  features: ['Volume Spike Detection', 'All Binance Pairs Tracking', 'Institutional Activity Tracking', 'Email Notifications'],
  techStack: ['Python', 'Websockets', 'Binance API'],
  mockup: "/volume-bot/volume-bot-mockup.png",
  responsibilities: 'Developed a trading bot that uses volume spikes to predict price movements and track institutional activity. The bot is able to track all Binance pairs in parallel and send notifications to a Desired Email. The bot runs on CLI and was made for a client.',
  preview: {
    logo: "/volume-bot/volume-bot-logo.png",
    title: "Volume Spike Trading Bot",
    code: "https://github.com/PortsZ/volume-spike-trade-bot",
    description: "A trading bot that uses volume spikes to predict price movements and track institutional activity.",
    shortStack: "Python, websockets, Binance API",
  }
};





export const projects:ProjectInterface[] = [antares, martPlus, volumeSpikeBot]