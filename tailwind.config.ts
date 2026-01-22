import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                slate: {
                    850: "#1e293b", // Custom deep slate
                    900: "#0f172a",
                    950: "#020617",
                },
                primary: {
                    DEFAULT: "#0ea5e9", // Sky 500 - Electric Blue-ish
                    hover: "#0284c7",
                },
                accent: {
                    DEFAULT: "#10b981", // Emerald 500
                    hover: "#059669",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
            },
        },
    },
    plugins: [],
};
export default config;
