// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
    base: command === 'build' ? '/vite-test-hosting/' : '/',
}))