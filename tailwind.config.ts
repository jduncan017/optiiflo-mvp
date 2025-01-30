import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        kumbh: ["var(--font-kumbh)", ...fontFamily.sans],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        // Primary colors
        P1: "#FF9881",
        P2: "#FF6645",
        P3: "#DB3612",
        P4: "#972006",

        // Neutral colors
        N1: "#FFFFFF",
        N2: "#F6FBFC",

        // Greys
        G1: "#ECEFEF",
        G2: "#D9D9D9",
        G3: "#949494",
        G4: "#4C4C4C",
        G5: "#1a1a1a",

        // Secondary colors
        S1: "#E3F0F2",
        S2: "#A2D9E5",
        S3: "#5197A7",
        S4: "#537178",
        S5: "#0C3842",
      },
      boxShadow: {
        optii: "2px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
} satisfies Config;
