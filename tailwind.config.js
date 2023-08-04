/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sidebar-desktop': "url('../public/images/bg-sidebar-desktop.svg')",
        'sidebar-mobile': "url('../public/images/bg-sidebar-mobile.svg')",
      },

      textColor: {
        'Marine-blue': "#02295a",
        'Purplish-blue': "#473dff",
        'Pastel-blue': "#adbeff",
        'Light-blue': "#bfe2fd",
        'Strawberry-red': "#ed3548",

        'cool-gray': "#9699ab",
        'light-gray': "#d6d9e6",
       'extra-light-gray': "#f0f6ff",
        'white': "#ffffff",
      },

      colors: {
        'Marine-blue': "#02295a",
        'Purplish-blue': "#473dff",
        'Pastel-blue': "#adbeff",
        'Light-blue': "#bfe2fd",
        'Strawberry-red': "#ed3548",

        'cool-gray': "#a2a5b3",
        'light-gray': "#d6d9e6",
       'extra-light-gray': "#f0f6ff",
        'white': "#ffffff",
      },
    },
  },
  plugins: [],
}

