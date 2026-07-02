# Datasworn Official Content

Official Datasworn content source data and generated npm package artifacts for
Ironsworn, Ironsworn: Delve, Ironsworn: Lodestar, Ironsworn: Starforged, and
Sundered Isles.

## Build

```sh
bun install
bun run build
```

The build uses `@datasworn-community/core` and
`@datasworn-community/build-tools` at matching versions.

`source_data/` preserves the imported upstream YAML source. The build invokes
the shared content package builder directly against those sources.
