module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  // corePlugins: {
  //   preflight: false,
  // },
  // prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        primary: "#113858",
      },
    },
  },

  plugins: [
    require('flowbite/plugin')
  ],
  // important: true,
}
