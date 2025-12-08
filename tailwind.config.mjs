/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                navy: {
                    900: '#0B1120', // Main background
                    800: '#1e293b', // Cards/Sections
                },
                primary: '#0EA5E9', // Sky 500
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
