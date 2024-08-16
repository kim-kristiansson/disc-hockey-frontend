/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            "spotify-green": {
               DEFAULT: "#1DB954",
               dark: "#1AA34A",
            },
         },
      },
   },
   plugins: [],
};
