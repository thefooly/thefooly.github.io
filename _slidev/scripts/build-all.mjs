import { readdir, access } from 'node:fs/promises'
import { spawnSync } from 'node:child_process'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const slidevRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const repositoryRoot = resolve(slidevRoot, '..')
const decksRoot = join(slidevRoot, 'decks')

const decks = await readdir(decksRoot)

for (const name of decks) {
  const slides = join(decksRoot, name, 'slides.md')

  try {
    await access(slides)
  }
  catch {
    continue
  }

  const output = join(repositoryRoot, '_site', 'slides', name)
  const base = `/slides/${name}/`

  console.log(`\nBuilding ${name}`)
  console.log(`  source: ${slides}`)
  console.log(`  base:   ${base}`)
  console.log(`  output: ${output}\n`)

  const result = spawnSync(
    'pnpm',
    [
      'exec',
      'slidev',
      'build',
      slides,
      '--base',
      base,
      '--out',
      output,
      '--router-mode',
      'hash',
      '--without-notes',
    ],
    {
      cwd: slidevRoot,
      stdio: 'inherit',
      shell: true,
    },
  )

  if (result.status !== 0)
    process.exit(result.status ?? 1)
}