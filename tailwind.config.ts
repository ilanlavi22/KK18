import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        "theme-pink": "#FF4562",
        "theme-pink-light": "#FFA3B0",
        "theme-gray": "#E6E6E6",
        "theme-purple": "#29007B",
        "theme-purple-light": "#9480BD",
        "theme-purple-nav": "#34205C",
      },

      backgroundImage: {
        "hero-sm": "url('/ackermann_sebastian.jpg')",
        "hero-md": "url('/ackermann_sebastian.jpg')",
        "bg-about": "url('/bg-about-alter.jpg')",
        "bg-themen": "url('/coley-christine.jpg')",
        "bg-themen-sm": "url('/coley-christine.jpg')",
        "bg-key": "url('/key-visual.png')",
      },
      backgroundSize: {
        "hero-sm": "cover",
        "hero-md": "cover",
        "bg-about": "cover",
        "bg-themen": "cover",
        "bg-key": "383px, 100%",
        //"hero-md": "114vw",
      },
      backgroundPosition: {
        "hero-sm": "35% center",
        "hero-md": "center top",
        "bg-about": "center center",
        "bg-themen": "center 20%",
        "bg-themen-sm": "35% top",
        "bg-key": "-50px top",
        //"hero-md": "left -30px",
      },
      backgroundRepeat: {
        "hero-sm": "no-repeat",
        "hero-md": "no-repeat",
        "bg-about": "no-repeat",
        "bg-themen": "no-repeat",
        "bg-key": "no-repeat",
      },
      gridTemplateColumns: {
        "270": "repeat(auto-fit, minmax(280px, 1fr))",
        "270-md": "repeat(2, 1fr)",
      },
      fontFamily: {
        nunitoSans: ["var(--font-nunitoSans)"],
        proxima: ["var(--font-proxima)"],
      },
    },
  },
  plugins: [],
};
export default config;
