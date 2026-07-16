# Datasworn Official Content

Official Datasworn content source data and generated npm package artifacts for
the Ironsworn family of tabletop RPGs published by Shawn Tomkin — Ironsworn
Classic, Ironsworn: Delve, Ironsworn: Lodestar, Ironsworn: Starforged, and
Sundered Isles.

## Packages

| Package ID | npm package | Ruleset | Source |
|---|---|---|---|
| `classic` | [`@datasworn-community/ironsworn-classic`](https://www.npmjs.com/package/@datasworn-community/ironsworn-classic) | Ironsworn (Classic) | [source](./source_data/classic) · [JSON](./generated-datasworn/classic.json) |
| `delve` | [`@datasworn-community/ironsworn-classic-delve`](https://www.npmjs.com/package/@datasworn-community/ironsworn-classic-delve) | Ironsworn: Delve | [source](./source_data/delve) · [JSON](./generated-datasworn/delve.json) |
| `lodestar` | [`@datasworn-community/ironsworn-classic-lodestar`](https://www.npmjs.com/package/@datasworn-community/ironsworn-classic-lodestar) | Ironsworn: Lodestar | [source](./source_data/lodestar) · [JSON](./generated-datasworn/lodestar.json) |
| `starforged` | [`@datasworn-community/starforged`](https://www.npmjs.com/package/@datasworn-community/starforged) | Ironsworn: Starforged | [source](./source_data/starforged) · [JSON](./generated-datasworn/starforged.json) |
| `sundered_isles` | [`@datasworn-community/sundered-isles`](https://www.npmjs.com/package/@datasworn-community/sundered-isles) | Sundered Isles | [source](./source_data/sundered_isles) · [JSON](./generated-datasworn/sundered_isles.json) |

## Raw JSON

Generated raw Datasworn JSON is committed in [`generated-datasworn/`](./generated-datasworn) for users
who want to download or browse files directly from GitHub.

Use [`generated-datasworn/manifest.json`](./generated-datasworn/manifest.json) to see the current generated file,
package name, schema line, license, and dependency metadata for each content
package.

## Build

```sh
bun install
bun run build
bun run validate
```

The build uses `@datasworn-community/core` and
`@datasworn-community/build-tools` at matching versions.

`source_data/` preserves the imported upstream YAML source. The build invokes
the shared content package builder directly against those sources. Do not edit
`generated-datasworn/`, `datasworn/`, or `dist/` by hand; edit `source_data/`
and rebuild.

## Repository Layout

```text
source_data/           Datasworn source YAML you edit
datasworn.config.yaml  Build and package metadata
generated-datasworn/   Generated raw JSON committed for GitHub users
datasworn/             Generated built JSON, ignored by git
dist/packages/         Generated npm package artifacts, ignored by git
.github/workflows/     Build and release workflow callers
```

## How Publishing Works

Stable and experimental packages publish through npm trusted publishing; no npm
access token is required. Apply the `release_experimental` label to a pull
request to publish canaries under its `pr-<number>` dist-tag. Removing the label
stops future publishes, but the tag remains after the pull request closes as a
convenience alias. Use the exact canary version from the PR comment for
reproducible installs.

## Related repositories

- Datasworn core + build-tools: <https://github.com/datasworn-community/datasworn>
- Community content packages: <https://github.com/datasworn-community/community-content>
- Shared content workflows: <https://github.com/datasworn-community/.github>
- Template for new content packages: <https://github.com/datasworn-community/community-template>
- Web viewer: <https://github.com/datasworn-community/viewer> — live at <https://datasworn-community.github.io/viewer/>
- Published npm packages: <https://www.npmjs.com/org/datasworn-community>
