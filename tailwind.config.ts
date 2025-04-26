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