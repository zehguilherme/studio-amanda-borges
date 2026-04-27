# AGENTS.md - Studio Amanda Borges

This file provides guidelines for agentic coding agents operating in this repository.

## Project Overview

- **Framework**: Next.js 16.2.4 with React 19
- **Language**: JavaScript (uses jsconfig.json, not TypeScript)
- **Styling**: Tailwind CSS with PostCSS
- **Testing**: Jest 30 + Testing Library
- **Linting**: ESLint + Prettier

## Build & Development Commands

All commands run from the `web/` directory:

```bash
cd web
```

### Development

```bash
npm run dev          # Start dev server at http://localhost:3000
```

### Build

```bash
npm run build        # Production build
npm run start        # Start production server
```

### Linting

```bash
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix linting issues
```

### Testing

```bash
npm test             # Run all tests once
npm run test:watch  # Run tests in watch mode
npm run test:coverage # Run tests with coverage report

# Run a single test file
npx jest path/to/test-file.test.js

# Run a single test
npx jest -t "test name pattern"

# Run tests in a specific file with verbose output
npx jest --verbose path/to/test-file.test.js
```

## Code Style Guidelines

### General Rules

- **Language**: JavaScript (not TypeScript). Use JSDoc for type annotations when needed.
- **Strict mode**: Enable in all files (`"use strict";`)
- **No console.log**: Use console.error for debugging (ESLint will error on console.log)

### Formatting (Prettier)

- Uses `.prettierrc` with `{"editorconfig": true}`
- Follows EditorConfig settings in `.editorconfig`
- Prettier plugin for Tailwind CSS is installed (`prettier-plugin-tailwindcss`)

### Imports

- Use absolute imports with `@/` alias (e.g., `import Component from "@/components/Component"`)
- Group imports in this order:
  1. External libraries (React, Next.js, etc.)
  2. Internal imports (components, hooks, utils)
  3. Relative imports
- Sort alphabetically within each group
- Example:

  ```javascript
  import "use client";

  import { useState } from "react";

  import Component from "@/components/Component";
  import { useCustomHook } from "@/hooks/useCustomHook";

  import styles from "./Component.module.css";
  ```

### Naming Conventions

- **Components**: PascalCase (e.g., `Header.jsx`, `Footer.jsx`)
- **Files**: kebab-case for non-component files (e.g., `graphql-client.js`)
- **Hooks**: camelCase with `use` prefix (e.g., `useAuth.js`)
- **Constants**: SCREAMING_SNAKE_CASE (e.g., `API_ENDPOINTS`)
- **Variables/Functions**: camelCase
- **Classes**: PascalCase

### Component Structure

```javascript
"use client";

import { useState } from "react";
import PropTypes from "prop-types";

import Component from "@/components/Component";
import styles from "./Component.module.css";

export default function ComponentName({ prop1, prop2 }) {
  const [state, setState] = useState(null);

  useEffect(() => {
    // effect logic
  }, []);

  function handleAction() {
    // handler logic
  }

  return <div className={styles.container}>{/* JSX content */}</div>;
}

ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number,
};

ComponentName.defaultProps = {
  prop2: 10,
};
```

### Error Handling

- Use try-catch blocks for async operations
- Handle errors gracefully with user feedback
- Log errors appropriately (use console.error, not console.log)

### Testing Conventions

- Test files: `*.test.js` or `*.spec.js`
- Location: Same directory as the component, or `__tests__` folder
- Use @testing-library/react for component testing
- Use msw (Mock Service Worker) for API mocking
- Follow Jest best practices:
  - No focused tests in production (describe.skip, it.skip allowed)
  - Use descriptive test names
  - Keep tests independent

### Tailwind CSS

- Use Tailwind utility classes for styling
- Custom components should use CSS modules for component-specific styles
- Follow Tailwind CSS best practices

## Project Structure

```
web/
├── src/
│   ├── components/     # Reusable React components
│   │   └── icons/      # Icon components
│   ├── contexts/       # React Context providers
│   ├── graphql/        # GraphQL queries and client
│   ├── hooks/          # Custom React hooks
│   ├── infra/          # Infrastructure code (API clients, etc.)
│   ├── mocks/          # Test mocks
│   ├── pages/          # Next.js pages (or app directory)
│   │   └── api/        # API routes
│   └── styles/         # Global styles
├── public/             # Static assets
├── __tests__/          # Test files (optional)
└── node_modules/
```

## Common Issues & Solutions

### Running Single Tests

```bash
# Run specific test file
npx jest src/components/Header.test.js

# Run test matching pattern
npx jest -t "should render"

# Run tests in debug mode
npx jest --inspect-brk src/components/Header.test.js
```

### Linting Specific Files

```bash
# Lint specific file
npx eslint src/components/Header.jsx

# Lint with auto-fix
npx eslint --fix src/components/Header.jsx
```

## Environment Variables

- Create `.env` file based on `.env.example`
- Never commit secrets to version control
- Use `NEXT_PUBLIC_` prefix for client-side exposed variables
