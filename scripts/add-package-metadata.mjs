import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const packageRoot = path.resolve('dist/packages')
const repository = {
  type: 'git',
  url: 'git+https://github.com/datasworn-community/official-content.git'
}

for (const entry of await readdir(packageRoot, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue

  const manifestPath = path.join(packageRoot, entry.name, 'package.json')
  const manifest = JSON.parse(await readFile(manifestPath, 'utf8'))
  manifest.repository = repository
  await writeFile(manifestPath, `${JSON.stringify(manifest, undefined, 2)}\n`)
}
