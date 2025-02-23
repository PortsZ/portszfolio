import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#111013",
        primary: "#ff00bb",
        secondary: "#38AECC",
        tertiary: "#0090C1",
        quaternary: "#A200FF",
      },
      dropShadow: {
        sun: "0px 0px 50px #FFC505",
        sun2: "0px 0px 15px #fff",
        sidebar: "10px 0px 5px #3B2D00",
        contrast: "0px 1px 2px #7b51ff",
        contrast2: "0px 0px 5px #7b51ff",
        productNav: "0px 0px 5px #513d91",
        productNavActive: "0px 0px 1px #ffb300",
        tabNavActive: "0px -22px 0px #ffb300",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
      xxl: "3000px",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "translate-z": (value: any) => ({
            "--tw-translate-z": value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }), // this is actual CSS
        },
        { values: theme("translate"), supportsNegativeValues: true },
      );
    }),
  ],
} satisfies Config;
export default config;
