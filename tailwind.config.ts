import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
      },

      /* Soft, realistic shadow system */
      boxShadow: {
        'smooth': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'elevated': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
        'brand': '0 10px 15px -3px rgba(38, 89, 216, 0.15)',
      },

      /* The secret to smooth UX: Custom Easing */
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)', // "The Hospitality Curve"
      },

      colors: {
        bg: {
          DEFAULT: "#FFFFFF",
          soft: "#F8FAFC",
          muted: "#F1F5F9",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          raised: "#FFFFFF",
          sun: "#FFFBF2",
        },
        line: {
          DEFAULT: "#E2E8F0",
          strong: "#CBD5E1",
        },
        ink: {
          DEFAULT: "#0B1220",
          soft: "#1F2937",
          muted: "#475569",
          faint: "#64748B",
          invert: "#FFFFFF",
        },
        brand: {
          50: "#EEF4FF",
          100: "#DCE7FF",
          200: "#B8D0FF",
          300: "#93B6FF",
          400: "#5F8EFF",
          500: "#2659D8",
          600: "#1E4FBF",
          700: "#1A409A",
          800: "#163377",
          900: "#10224D",
          DEFAULT: "#2659D8",
        },
        reef: {
          50: "#E8FFFB",
          100: "#CFFFF7",
          200: "#9FF6EA",
          300: "#63E8D9",
          400: "#2ED2C7",
          500: "#14B8A6",
          600: "#0F8F84",
          700: "#0C6F67",
          800: "#0A564F",
          900: "#083E3A",
          DEFAULT: "#14B8A6",
        },
        sand: {
          50: "#FFFBF2",
          100: "#FFF3D9",
          200: "#FFE4A8",
          300: "#FFD073",
          400: "#FFBD3D",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
          DEFAULT: "#F59E0B",
        },
        ok: { DEFAULT: "#16A34A", soft: "#DCFCE7" },
        warn: { DEFAULT: "#F59E0B", soft: "#FFFBEB" },
        bad: { DEFAULT: "#DC2626", soft: "#FEE2E2" },
      },
    },
  },
  plugins: [],
};

export default config;