/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        pallete: {
          gray: '#333',
          ['light-gray-500']: '#696969',
          'light-gray': '#999',
          light: '#f5f5f5'
        },

        dark: {
          body: '#1F2937',
          container: '#111827',
          input: '#374151'
        }
      }
    }
  },
  plugins: []
}
