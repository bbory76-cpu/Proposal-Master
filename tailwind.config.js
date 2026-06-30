/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Pretendard"', '"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Pretendard"', '"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"SFMono-Regular"', '"Roboto Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
