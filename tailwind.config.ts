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
        vocavo: {
          50: '#f7f9f7',
          100: '#e6ede6',
          200: '#d1ddd1',
          300: '#a7bfa7',
          400: '#7a997a',
          500: '#5b7b5b',
          600: '#486248',
          700: '#3b4f3b',
          800: '#324232',
          900: '#2b382b',
        },
        sage: {
          50: '#f8faf8',
          100: '#eef2ee',
          200: '#dde5dd',
          300: '#bfcebf',
          400: '#96ac96',
          500: '#768f76',
          600: '#5d725d',
          700: '#4b5c4b',
          800: '#404c40',
          900: '#363f36',
        },
        olive: {
          50: '#fbfbf8',
          100: '#f5f7ed',
          200: '#eaeedb',
          300: '#d6dfb8',
          400: '#c5d29a',
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
        space: ['var(--font-space)'],
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
        'float': 'float 8s ease-in-out infinite',
        'fade': 'fade 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        fade: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config 