/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            padding: {
                '25vh': '25vh',
            },
            fontFamily: {
                'porter-sans-block': ['porter_sans_block', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'spotify-green': {
                    DEFAULT: '#1DB954',
                    dark: '#1AA34A',
                },
                'retro-red': {
                    DEFAULT: '#D72638',
                },
            },
        },
    },
    plugins: [],
}
