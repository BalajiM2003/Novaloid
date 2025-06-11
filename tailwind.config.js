module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#39FF14',
        'electric-blue': '#00BFFF',
        'dark-bg': '#0f0f0f',
        black: '#000',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
