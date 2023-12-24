import { cp } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

async function copyAssets() {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const rSrc = (path) => resolve(__dirname, '../node_modules', path)
  const rDest = (path) => resolve(__dirname, '../docs/public', path)

  try {
    await Promise.all([
      cp(rSrc('katex/dist/fonts'), rDest('katex/fonts'), { recursive: true }),
      cp(rSrc('katex/dist/katex.min.css'), rDest('katex/katex.min.css')),
    ])
    console.log('Assets were copied')
  } catch (e) {
    console.error('Assets could not be copied')
    console.error(e.message)
  }
}

copyAssets()
