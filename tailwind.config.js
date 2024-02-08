/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "todo-background": "url('assets/background-img.jpg')",
      },
    },
    screens: {
      mobile: "480px",
      sm: "640px",
      md: "1024px",
      lg: "1280px",
    },
  },
  plugins: [],
};
