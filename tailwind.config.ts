/** @type {import('tailwindcss').Config} */
import { type Config } from "tailwindcss"
import colors from "tailwindcss/colors"
import { fontFamily } from "tailwindcss/defaultTheme"

export default {
  content: ["./src/**/*.tsx"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: colors.zinc,
        green: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        serif: ["var(--font-serif)", ...fontFamily.serif],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config
