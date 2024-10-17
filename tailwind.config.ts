import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CF97A0',
        lightGray: '#ECECEC',
        pinkish: '#D9A3AC',
        mediumPink: '#CF8C95',
        darkGray: '#5A5E61',
      },
    },
  },
  plugins: [],
};
export default config;
