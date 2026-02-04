import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Kimance brand colors - adjust as needed
        kimance: {
          primary: '#0066FF',
          secondary: '#00D4AA',
          dark: '#0A1628',
          light: '#F8FAFC',
        },
      },
    },
  },
  plugins: [],
}
export default config
