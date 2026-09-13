/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Single source of truth for the brand gradient stops.
        // Change these three values to re-theme the whole site.
        brand: {
          from: "#f97316", // orange
          via: "#ec4899", // pink
          to: "#8b5cf6", // violet
        },
      },
      backgroundImage: {
        // Shared gradient used for: brand name, hero heading highlight, primary buttons.
        "brand-gradient":
          "linear-gradient(90deg, #f97316 0%, #ec4899 55%, #8b5cf6 100%)",
      },
    },
  },
  plugins: [],
};
