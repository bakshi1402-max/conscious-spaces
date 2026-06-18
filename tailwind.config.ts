import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F5F2EC",
        sand: "#E9E2D6",
        stone: "#A89E8E",
        clay: "#8C7A65",
        bark: "#54483A",
        charcoal: "#1E1B17",
        ink: "#15130F",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 9vw, 9rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.75rem, 6vw, 5.5rem)", { lineHeight: "1.02", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
      },
      maxWidth: {
        container: "1600px",
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.65, 0, 0.35, 1)",
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
