import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        regular: ['GolosText-Regular', 'sans-serif'],
        medium: ['GolosText-Medium', 'sans-serif'],
        semiBold: ['GolosText-SemiBold', 'sans-serif'],
        bold: ['GolosText-Bold', 'sans-serif'],
      },
    },
    screens: {
      '2xl': {'max': '1536px'},
      xl: {'max': '1280px'},
      lg: {'max': '1024px'},
      md: {'max': '800px'},
      sm: {'max': '640px'},
      xs: {'max': '450px'},
    },
  },
  plugins: [],
} satisfies Config;
