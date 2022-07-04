/// <reference types="vitest" />
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [Vue()],
  test: {
    coverage: {
      reportsDirectory: './test/coverage'
    },
    globals: true,
    environment: 'jsdom'
  }
})
