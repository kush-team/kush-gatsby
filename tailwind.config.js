module.exports = {
    purge: false,
    darkMode: false, // or 'media' or 'class'
    theme: {
      fontFamily: {
        sans: ["Work Sans", "sans"],
        serif: ["Titillium Web", "serif"],
        mono: ["Space Mono", "mono"],
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }
  