import { defineConfig } from 'vite'
// 导入Vite的React插件
import react from '@vitejs/plugin-react'

// Vite配置
// https://vitejs.dev/config/


// 注册插件
export default defineConfig({
  plugins: [react()],
})
