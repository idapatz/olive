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
          50: '#f8f8f7',
          100: '#f0f0ee',
          200: '#e8e8e5',
          300: '#d5d6cf',
          400: '#b3b7a7',
          500: '#959a85',
          600: '#797f6d',
          700: '#5f645a',
          800: '#54574b',
          900: '#3c3d37',
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
        darkOlive: {
          50: '#f4f5f2',
          100: '#e9ebe4',
          200: '#d3d7c9',
          300: '#b7c0a8',
          400: '#9ba987',
          500: '#7f9266',
          600: '#637545',
          700: '#4a5a34',
          800: '#3a4729',
          900: '#2a341e',
        },
        vibrantGreen: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        accentPink: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
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
        'spin-slow': 'spin 20s linear infinite',
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
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}

export default config 