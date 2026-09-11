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

## Discord Giveaway Expansions

The Discord giveaway asset expansions are imported from
[`sgreg/giveaways-datasworn`](https://github.com/sgreg/giveaways-datasworn) at
tag `26.08.0` (commit `9cbc96a`):

- `source_data/classic/assets.yaml` is imported as
  `source_data/giveaways_classic/assets.yaml`.
- `source_data/starforged/assets.yaml` is imported as
  `source_data/giveaways_starforged/assets.yaml`.

The imported package IDs, `giveaways_classic` and `giveaways_starforged`, are
preserved from the upstream source. The following structural and metadata
inconsistencies are normalized:

- The source-specific `giveaways` asset collections are separated into the
  standard `path` and `companion` collections and linked to the corresponding
  base ruleset collections. This follows the established expansion convention
  and gives each asset a category-specific Datasworn ID.

- The shared last-update date is changed from `2026-05-12` to `2026-09-09` to
  reflect the latest included asset, Moonbound.
- Wildcard is tagged as recommended for both Starforged and Sundered Isles,
  matching the upstream compatibility table and the other dual-game assets.

## Attribution

Datasworn was originally created by rsek and later maintained in the
`tbsvttr/datasworn` fork. Official game text and content remain attributed to
their source publications and authors as recorded in the source data files.
