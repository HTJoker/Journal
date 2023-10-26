import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        poppins: ["var(--font-poppins)", "sans-serif"],
        montserrat: ["var(--font-monserrat)", "sans-serif"]
      },
    },
  },
  plugins: [],
} satisfies Config;
