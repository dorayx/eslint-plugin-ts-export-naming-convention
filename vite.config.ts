/// <reference types="vitest" />
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    setupFiles: ['tests/setup.ts'],
    // we need to change the current working directory of test runners to the fixtures directory
    threads: false,
  },
});
