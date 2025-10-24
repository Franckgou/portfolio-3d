/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // Apple-inspired light palette
        primary: "#ffffff",
        secondary: "#f5f5f7",
        tertiary: "#fbfbfd",
        accent: "#0071e3", // Apple blue
        "accent-hover": "#0077ed",
        "gray-50": "#fafafa",
        "gray-100": "#f5f5f7",
        "gray-200": "#e8e8ed",
        "gray-300": "#d2d2d7",
        "gray-400": "#86868b",
        "gray-500": "#6e6e73",
        "gray-600": "#515154",
        "gray-700": "#1d1d1f",
        "gray-800": "#161617",
      },
      boxShadow: {
        card: "0px 2px 8px rgba(0, 0, 0, 0.04), 0px 4px 24px rgba(0, 0, 0, 0.06)",
        "card-hover": "0px 4px 16px rgba(0, 0, 0, 0.08), 0px 8px 32px rgba(0, 0, 0, 0.08)",
        sm: "0px 1px 2px rgba(0, 0, 0, 0.04), 0px 2px 8px rgba(0, 0, 0, 0.04)",
        lg: "0px 8px 24px rgba(0, 0, 0, 0.06), 0px 16px 48px rgba(0, 0, 0, 0.08)",
      },
      screens: {
        xs: "450px",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        "display-lg": ["80px", { lineHeight: "1.05", fontWeight: "700", letterSpacing: "-0.015em" }],
        "display-md": ["64px", { lineHeight: "1.1", fontWeight: "700", letterSpacing: "-0.015em" }],
        "display-sm": ["48px", { lineHeight: "1.1", fontWeight: "700", letterSpacing: "-0.01em" }],
      },
      backgroundImage: {
        "gradient-subtle": "linear-gradient(180deg, #ffffff 0%, #f5f5f7 100%)",
      },
    },
  },
  plugins: [],
};
