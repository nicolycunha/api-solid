import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    dir: 'src',
    setupFiles: ['./vitest.setup.ts'],
    pool: process.env.CI ? 'forks' : 'threads',
    hookTimeout: 20000,
    teardownTimeout: 10000,

    projects: [
      {
        extends: true,
        test: {
          name: 'unit',
          dir: 'src/use-cases'
        }
      },
      {
        extends: true,
        test: {
          name: 'e2e',
          dir: 'src/http/controllers',
          environment:
            './prisma/vitest-environment-prisma/prisma-test-environment.ts'
        }
      }
    ]
  }
})
