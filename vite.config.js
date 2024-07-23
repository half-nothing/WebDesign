import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

export default defineConfig({
    root: process.cwd(),
    base: "./",
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@style': path.resolve(__dirname, './src/style'),
            '@public': path.resolve(__dirname, './public')
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                javascriptEnabled: true,
                additionalData: '@import "@style/variable.scss";',
            }
        }
    },
    json: {
        namedExports: true,
        stringify: false
    },
    build: {
        minify: "terser",
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        }
    },
    server: {
        host: "0.0.0.0",
        hmr: true,
        strictPort: false,
        proxy: {

        }
    },
    logLevel: "info",
    clearScreen: false
})
