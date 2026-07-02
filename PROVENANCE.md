# Provenance

This repository is a clean-history Datasworn Community continuation of official
Datasworn content source data. It is not a mirror import of the upstream
monorepo history.

## Upstream Lineage

- Original project and creator source: `rsek/datasworn`
  - URL: https://github.com/rsek/datasworn
  - Observed `main` commit during this scaffold: `0e995ed485d7f6bf56e30342a4b91b8348282b4c`
- Maintained upstream fork: `tbsvttr/datasworn`
  - URL: https://github.com/tbsvttr/datasworn
  - Local remote: `upstream`
  - Observed `upstream/main` commit during this scaffold: `79bc272c78636c10bacd60898bb79977a7ee9ec0`
- Local import source: `scottbenton/datasworn`
  - URL: https://github.com/scottbenton/datasworn
  - Local remote: `origin`
  - Imported from `origin/main` commit: `b061c720b4af6b6a1679bbb48f10a9f0811c2c75`
  - `origin/main` includes `codex/sundered-isles-hold-supply` commit:
    `b27bc91c25039f23a72ffc061d6e2394f779643e`

## Imported Directories

The initial scaffold imports these directories from `scottbenton/datasworn` at
`b061c720b4af6b6a1679bbb48f10a9f0811c2c75`:

- `source_data/classic`
- `source_data/delve`
- `source_data/lodestar`
- `source_data/starforged`
- `source_data/sundered_isles`

The initial scaffold also compared against generated package JSON from the same
commit as a temporary parity reference. Those generated seeds are not retained;
the repository builds directly from the imported YAML source data.

The `feat/ironlink-rules-extensions` branch was intentionally not imported in
this scaffold. It contains optional rules/settings metadata that should be
considered separately from the official content package split.

The imported YAML is preserved in `source_data/`. During builds, the shared
`@datasworn-community/build-tools` package reads those sources directly,
normalizes compatible source metadata to the active Datasworn schema generation,
and emits generated JSON/package artifacts.

## Attribution

Datasworn was originally created by rsek and later maintained in the
`tbsvttr/datasworn` fork. Official game text and content remain attributed to
their source publications and authors as recorded in the source data files.
