import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000112',
      light: {
        300: '#f4f7fd',
        500: '#e4ebfa',
        700: '#828fa3',
      },
      dark: {
        300: '#3e3f4e',
        500: '#2b2c37',
        700: '#20212c',
      },
      purple: {
        300: '#a8a4ff',
        500: '#635fc7',
      },
      red: {
        300: '#ff9898',
        500: '#ea5555',
      },
    },
  },
  plugins: [],
}
export default config
