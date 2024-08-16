/// <reference types="vitest"/>
/// <reference types="vite/client"/>

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 1234,
    },
    test: {
        globals: true,
        environment: 'jsdom',
        css: true,
        setupFiles: './vitest.setup.ts',
    },
})
