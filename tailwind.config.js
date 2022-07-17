/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}'
  ],
  theme: {
    colors: {
      'red': '#ED1C24',
      'black': '#1D1C22',
      'white': '#FFFFFF',
      'gray': '#424141',
      'yellow': '#FECD3F',
      'blue': '#1477F1',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      acumin: ['acumin-pro', 'Acumin Pro', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}