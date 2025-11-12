import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repository = (process.env.GITHUB_REPOSITORY || '').toLowerCase()
const repoName = repository.split('/')[1] || ''
const isUserSite = repoName.endsWith('.github.io')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS
    ? isUserSite
      ? '/'
      : `/${repoName}/`
    : '/',
})
