# Mocks

Module at `src/mocks/`. Update this file when behavior or verification changes.

## Scope

Provides MSW handlers used by tests to simulate the DatoCMS GraphQL API. It does not own production data fetching or page rendering.

## Key files

- `handlers.js` — `GET_ALL_PROJECTS`, `GET_ABOUT_DATA`, and `GET_PROJECT` GraphQL handlers.
- `server.js` — Node test server assembled from the handlers.

## Surfaces

- GraphQL operation mocks consumed by the Jest setup.

## Before editing

1. Confirm you are in the correct module directory
2. Read this file completely
3. Run `../../../init.sh` at repo root if baseline is unknown

## Verification

Run `npm test -- --runInBand` from `web/`; the mock behavior is covered by the component test suites.

## Constraints

- MUST: follow repo-wide rules in AGENTS.md
- MUST: keep mocked response shapes compatible with the GraphQL queries under `src/graphql/`
- MUST NOT: edit another module's files unless the active feature requires it

## References

- Parent harness: `../../../AGENTS.md`
- Feature state: `../../../feature_list.json`
