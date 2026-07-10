# Datasworn Official Content

Official Datasworn content source data and generated npm package artifacts for
Ironsworn, Ironsworn: Delve, Ironsworn: Lodestar, Ironsworn: Starforged, and
Sundered Isles.

## Raw JSON

Generated raw Datasworn JSON is committed in `generated-datasworn/` for users
who want to download or browse files directly from GitHub.

Use `generated-datasworn/manifest.json` to see the current generated file,
package name, schema line, license, and dependency metadata for each content
package.

## Build

```sh
bun install
bun run build
```

The build uses `@datasworn-community/core` and
`@datasworn-community/build-tools` at matching versions.

## Publishing

Stable and experimental packages publish through npm trusted publishing; no npm
access token is required. Apply the `release_experimental` label to a pull
request to publish canaries under its `pr-<number>` dist-tag. Removing the label
stops future publishes, but the tag remains after the pull request closes as a
convenience alias. Use the exact canary version from the PR comment for
reproducible installs.

`source_data/` preserves the imported upstream YAML source. The build invokes
the shared content package builder directly against those sources. Do not edit
`generated-datasworn/`, `datasworn/`, or `dist/` by hand; edit `source_data/`
and rebuild.
