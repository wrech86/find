import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import styleImport, { VantResolve } from 'vite-plugin-style-import';
const {resolve} = require('path')


// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias: 
    [
      {find: '@', replacement: resolve(__dirname, 'src')}, 
    ]
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        VantResolve()
      ]
    })
  ],
})
