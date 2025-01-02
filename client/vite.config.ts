import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const PORT = Number(env.VITE_PORT) || 3000;
  const BASE_URL = String(env.VITE_API_BASE_URL);

  return {
    plugins: [react()],
    server: {
      host: true,
      port: PORT,
      strictPort: true,
      proxy: {
        '/api': {
          changeOrigin: true,
          target: BASE_URL,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
});
