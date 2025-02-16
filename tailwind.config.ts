/** @type {import('tailwindcss').Config} */
import { type Config } from "tailwindcss"
import colors from "tailwindcss/colors"

export default {
  content: ["./src/**/*.tsx"],
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
    },
  },
} satisfies Config
