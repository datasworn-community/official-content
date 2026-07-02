import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'

const packageRoot = path.resolve('dist/packages')
const expectedRepositoryUrl =
  'git+https://github.com/datasworn-community/official-content.git'

for (const entry of await readdir(packageRoot, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue

  const manifestPath = path.join(packageRoot, entry.name, 'package.json')
  const manifest = JSON.parse(await readFile(manifestPath, 'utf8'))

  if (manifest.repository?.url !== expectedRepositoryUrl) {
    throw new Error(
      `${manifest.name ?? entry.name}: expected repository.url ${expectedRepositoryUrl}`
    )
  }
}
