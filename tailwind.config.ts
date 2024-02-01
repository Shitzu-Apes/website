import type { Config } from "tailwindcss";
import TypographyPlugin from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "mdx-components.tsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#31c891",
        "primary-dark": "#2aa876",
        "primary-light": "#6edcb9",
        "neutral-dark": "#333",
        "neutral-light": "#f2f2f2",
        bright: "#ffc107",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [TypographyPlugin()],
};
export default config;
