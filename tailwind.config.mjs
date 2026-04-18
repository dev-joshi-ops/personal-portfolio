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
                editorial: {
                    surface: '#fcf9f8',
                    text: '#323232',
                    primary: '#4d44e3',
                    secondary: '#585f6d',
                    'surface-low': '#f6f3f2',
                    'surface-container': '#f0eded',
                    'surface-highest': '#e4e2e2',
                    outline: '#7b7a7a',
                    // Dark Mode (Inverted Monograph)
                    'surface-dark': '#0f0f0f',
                    'text-dark': '#efefef',
                    'primary-dark': '#7c73ff',
                    'secondary-dark': '#a1a1a1',
                    'surface-low-dark': '#1a1a1a',
                    'surface-highest-dark': '#2d2d2d',
                }
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                serif: ['Newsreader', 'Georgia', 'serif'],
                mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
            },
            borderRadius: {
                none: '0',
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
