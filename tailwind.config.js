/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'green-water':'#A0F2EA',
        'blue-background':'rgb(12, 23, 38)',
        'blue-light-backgorund':'#132338',
        'white-light':'#F5FFFE'
      },
      maxWidth: {
        '1/2': '50%',
      },
      divideWidth:{
        '1xl':'1330px'
      }
    },
  },
  plugins: [],
}
