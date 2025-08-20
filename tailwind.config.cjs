/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // Modern light theme colors
        primary: "#f8fafc", // Light background
        secondary: "#64748b", // Muted text
        tertiary: "#e2e8f0", // Light surface
        
        // Accent colors for the futuristic theme
        'accent-primary': "#3b82f6", // Blue
        'accent-secondary': "#8b5cf6", // Purple
        'accent-tertiary': "#ec4899", // Pink
        'accent-gradient': "#06b6d4", // Cyan
        
        // Neutral palette for better contrast
        "neutral-50": "#f8fafc",
        "neutral-100": "#f1f5f9", 
        "neutral-200": "#e2e8f0",
        "neutral-300": "#cbd5e1",
        "neutral-400": "#94a3b8",
        "neutral-500": "#64748b",
        "neutral-600": "#475569",
        "neutral-700": "#334155",
        "neutral-800": "#1e293b",
        "neutral-900": "#0f172a",
        
        // Legacy colors for compatibility
        "black-100": "#e2e8f0",
        "black-200": "#cbd5e1",
        "white-100": "#f8fafc",
      },
      boxShadow: {
        card: "0px 20px 40px -15px rgba(59, 130, 246, 0.15)",
        "card-hover": "0px 30px 60px -15px rgba(59, 130, 246, 0.25)",
        "accent-glow": "0 0 20px rgba(59, 130, 246, 0.3)",
        "modern": "0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "glass": "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        "mesh-gradient": "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 25%, rgba(236, 72, 153, 0.1) 50%, rgba(59, 130, 246, 0.1) 75%, rgba(16, 185, 129, 0.1) 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)",
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'mesh-move': 'meshMove 20s ease-in-out infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      scale: {
        '102': '1.02',
      }
    },
  },
  plugins: [],
};