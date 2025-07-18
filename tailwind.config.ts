import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatDelayed: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'floatDelayed 6s ease-in-out infinite 3s',
      },
      colors: {
        sage: {
          '50': '#f8faf8',
          '100': '#eef2ee',
          '200': '#dde5dd',
          '300': '#bbc9bb',
          '400': '#97aa97',
          '500': '#788c78',
          '600': '#5f705f',
          '700': '#4d5a4d',
          '800': '#404940',
          '900': '#363c36',
        },
        vocavo: {
          '50': '#f7f8f2',
          '100': '#eef0e3',
          '200': '#dde2c8',
          '300': '#c3cc9e',
          '400': '#a7b274',
          '500': '#8b9652',
          '600': '#6d7641',
          '700': '#565d34',
          '800': '#474d2d',
          '900': '#3c4128',
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
    },
  },
  plugins: [],
}

export default config 