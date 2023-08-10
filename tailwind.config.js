/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sidebar-desktop': "url('../src/images/bg-sidebar-desktop.svg')",
        'sidebar-mobile': "url('../src/images/bg-sidebar-mobile.svg')",
      },

      textColor: {
        'marine-blue': "#02295a",
        'purplish-blue': "#473dff",
        'pastel-blue': "#adbeff",
        'light-blue': "#bfe2fd",
        'Strawberry-red': "#ed3548",

        'cool-gray': "#9699ab",
        'light-gray': "#d6d9e6",
       'extra-light-gray': "#f0f6ff",
        'white': "#ffffff",
      },

      colors: {
        'marine-blue': "#03326b",
        'marine-light-blue': "#0756b8",
        'purplish-blue': "#473dff",
        'pastel-blue': "#adbeff",
        'light-blue': "#bfe2fd",
        'strawberry-red': "#ed3548",

        'cool-gray': "#a2a5b3",
        'light-gray': "#d6d9e6",
       'extra-light-gray': "#f0f6ff",
        'white': "#ffffff",
      },

    },
  },
  plugins: [],
}

