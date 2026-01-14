import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Samawah New Identity
        samawah: {
          teal: '#118791',   // الرئيسية
          mint: '#97D3CB',   // الفاتح
          navy: '#062759',   // العميق
          peach: '#FEB25D',  // الجذاب
          coral: '#FE6D6A',
          beige: '#F7F5F0',  // Background
          grey: '#414042',   // Text
        },
        // Keeping legacy palettes for backward compatibility (can be deprecated later)
        brand: {
          50: '#f4f6f7',
          100: '#e3e8eb',
          200: '#c6d3d9',
          300: '#9cb3be',
          400: '#72909f',
          500: '#567586',
          600: '#465f6e',
          700: '#3a4e5a',
          800: '#34424b',
          900: '#2d383f', // Will be replaced by navy in usage
          950: '#1c2429',
        },
        sand: {
          50: '#fbfaf8',
          100: '#f5f3ec',
        },
        hodna: {
          // Using new colors mapping where appropriate
          cyan: '#97D3CB', // Mint
        },
        'hodna-cyan': '#97D3CB',
      },
      fontFamily: {
        // Exclusive font as requested
        sans: ['samawah', 'sans-serif'],
        serif: ['samawah', 'sans-serif'], // Unify serif to samawah as well to enforce single font
        samawah: ['samawah', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'bounce-slow': 'bounce-slow 3s infinite',
      },
    },
  },
  plugins: [],
};
export default config;

