import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "900p": "1600px",
        "1080p": "1920px",
        "2k": "2048px",
        "4k": "3840px",
      },
      colors: {
        "app-primary": "#86A789",
        "app-secondary": "#B2C8BA",
        "app-tertiary": "#D2E3C8",
        "app-light": "#EBF3E8",
        "app-lightSemiTransparent": "rgba(235, 243, 232, 0.5)",
        "app-dark": "#1B4242",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"],
  },
};
export default config;
