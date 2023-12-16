import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "clr-green": "#00CB4B",
        "clr-gray": "#f3f3f3",
      },
    },
  },
  plugins: [],
};
export default config;
