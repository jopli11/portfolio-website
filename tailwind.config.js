/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                heading: ["var(--font-syne)", "sans-serif"],
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "meteor-effect": "meteor 5s linear infinite",
                "gradient": "gradient 8s linear infinite",
                "shimmer": "shimmer 1.3s linear infinite",
                "float": "float 6s ease-in-out infinite",
                "glow": "glow 2s ease-in-out infinite alternate",
                "slide-up": "slide-up 0.6s ease-out",
                "fade-in": "fade-in 0.6s ease-out",
                "scroll": "scroll var(--animation-duration, 40s) linear infinite",
                "spotlight": "spotlight 2s ease .75s 1 forwards",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                meteor: {
                    "0%": {
                        transform: "rotate(135deg) translateX(0)",
                        opacity: "1"
                    },
                    "70%": {
                        opacity: "1"
                    },
                    "100%": {
                        transform: "rotate(135deg) translateX(-800px)",
                        opacity: "0",
                    },
                },
                gradient: {
                    to: { "background-position": "200% center" },
                },
                shimmer: {
                    from: {
                        "backgroundPosition": "0 0"
                    },
                    to: {
                        "backgroundPosition": "-200% 0"
                    }
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                glow: {
                    "0%": { "box-shadow": "0 0 20px hsl(var(--primary) / 0.3)" },
                    "100%": { "box-shadow": "0 0 40px hsl(var(--primary) / 0.6)" },
                },
                "slide-up": {
                    "0%": { transform: "translateY(20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                "fade-in": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                scroll: {
                    from: {
                        transform: "translateX(0)",
                    },
                    to: {
                        transform: "translateX(-100%)",
                    },
                },
                spotlight: {
                    "0%": {
                        opacity: "0",
                        transform: "translate(-72%, -62%) scale(0.5)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translate(-50%,-40%) scale(1)",
                    },
                },
            },
            backgroundImage: {
                "grid-small-black": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(0 0 0 / 0.05)'%3e%3cpath d='m0 .5h32m-32 32v-32'/%3e%3c/svg%3e\")",
                "grid-small-white": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='m0 .5h32m-32 32v-32'/%3e%3c/svg%3e\")",
            }
        },
    },
}