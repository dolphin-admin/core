import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { BootstrapAnimation } from '@dolphin-admin/bootstrap-animation'

export default defineConfig({
  plugins: [react(), BootstrapAnimation()]
})
