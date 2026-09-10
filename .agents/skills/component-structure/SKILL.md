---
name: component-structure
description: >-
  Use when creating, changing, or renaming React components in
  web/src/components/. Preserves this project's PascalCase names, component
  folder layout, named exports, icon layout, and colocated test convention.
  Trigger: componente, criar componente, renomear componente, alterar componente.
---

# Component structure

Follow the existing conventions in `web/src/components/`.

## Components

- Use a PascalCase directory under `web/src/components/` (for example,
  `ProjectCard/`).
- Put the implementation in that directory's `index.jsx`.
- Export the component as a named PascalCase symbol matching the component
  directory (for example, `export function ProjectCard()`).
- Keep a component test beside it as `ComponentName.test.js` when the behavior
  needs coverage. Tests are optional for presentational changes without logic.

## Icons

- Keep icons directly under `web/src/components/icons/` as PascalCase `.jsx`
  files (for example, `ArrowBack.jsx`).
- Export a named PascalCase component and accept SVG props when the icon is a
  reusable SVG, following the neighboring icons.

Reuse an existing component before creating a new one. Use the `@/components/`
alias for cross-component imports and match the nearest component's patterns.
Do not apply these rules to route files under `web/src/pages/`.

## Verification

From `web/`, run:

```bash
npm run test:component-names
```

Also run `npm run lint` for code changes and the relevant Jest tests when
component behavior or interactions change.
