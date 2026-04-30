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
                    surface: '#f0ece4',
                    text: '#000000',
                    primary: '#df492f',
                    secondary: '#585f6d',
                    'surface-low': '#e8e4dc',
                    'surface-container': '#e0dcd4',
                    'surface-highest': '#d8d4cc',
                    outline: '#7b7a7a',
                    selection: '#df492f',
                    // Dark Mode (Inverted Monograph)
                    'surface-dark': '#0f0f0f',
                    'text-dark': '#efefef',
                    'primary-dark': '#df492f',
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
