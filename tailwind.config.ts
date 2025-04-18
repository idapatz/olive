import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f7f7f4',
          100: '#e6e7e2',
          200: '#d1d3c8',
          300: '#b3b7a7',
          400: '#959a85',
          500: '#7d826d',
          600: '#65695a',
          700: '#54574b',
          800: '#484a41',
          900: '#3c3d37',
        },
        olive: {
          50: '#f9faf5',
          100: '#f1f4e5',
          200: '#e3e9cb',
          300: '#d0dba8',
          400: '#b8c97c',
          500: '#a3b85b',
          600: '#879c42',
          700: '#677832',
          800: '#52602a',
          900: '#445026',
        },
        beige: {
          50: '#faf8f2',
          100: '#f3efe1',
          200: '#e9e2c8',
          300: '#dbcea6',
          400: '#ccb87e',
          500: '#bfa35e',
          600: '#ad8d4e',
          700: '#8e7141',
          800: '#735b39',
          900: '#5f4b33',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
        futura: ['var(--font-futura)'],
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 12s linear infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'spin-slow': {
          'from': { transform: 'rotate(-12deg)' },
          'to': { transform: 'rotate(348deg)' },
        },
        blob: {
          '0%, 100%': { transform: 'scale(1) translate(0px, 0px)' },
          '33%': { transform: 'scale(1.1) translate(20px, -10px)' },
          '66%': { transform: 'scale(0.9) translate(-20px, 10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config 