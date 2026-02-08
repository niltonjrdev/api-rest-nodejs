import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src'],
  outDir: 'build',
  format: ['cjs'],
  splitting: false,
  sourcemap: true,
  clean: true,
})