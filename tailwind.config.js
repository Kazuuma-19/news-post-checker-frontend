/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-color-blue': '#17478a',
      },
      fontFamily: {
        'ja': ['Sawarabi Gothic', 'sans-serif'],
        'en': ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
