import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const {
  VITE_APP_SERVER_URL,
  VITE_APP_CLIENT_PORT
} = process.env;

export default defineConfig({
  build: {
    emptyOutDir: true,
    outDir: path.resolve(__dirname, '../server/public')
  },
  server: {
    host: 'localhost',
    port: Number(VITE_APP_CLIENT_PORT),
    proxy: {
      '/uploads': {
        target: VITE_APP_SERVER_URL
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname, 'node_modules')
    },
    extensions: ['.js', '.json', '.scss']
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/_config.scss";
          @import "@/assets/styles/_mixins.scss";
        `
      }
    }
  },
  define: {
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false
  },
  plugins: [
    vue()
  ]
});
