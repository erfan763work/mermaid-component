import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

export default () => {
  return defineConfig({
    plugins: [
      react(),
      checker({
        typescript: true,
        overlay: {
          initialIsOpen: false,
        },
      }),
    ],
    resolve: {
      alias: [{ find: 'src', replacement: path.resolve(__dirname, './src/') }],
    },
    build: {
      target: 'es2022',
      minify: true,
      sourcemap: true,
      chunkSizeWarningLimit: 5000,
    },
  });
};
