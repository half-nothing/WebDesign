import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@style': path.resolve(__dirname, './src/style'),
      '@public': path.resolve(__dirname, './public')
    }
  },
  css: {
    preprocessorOptions: {
      scss:{
          javascriptEnabled: true,
          additionalData: '@import "@style/variable.scss";',
      }
    }
  }
})
