#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT_DIR/web"

echo "=== Harness Initialization ==="

echo "=== npm ci ==="
npm ci

echo "=== npm run lint ==="
npm run lint

echo "=== npm test ==="
npm test

echo "=== npm run build ==="
npm run build

echo "=== Verification Complete ==="
echo ""
echo "Next steps:"
echo "1. Read feature_list.json to see current feature state"
echo "2. Read the module doc at web/src/mocks/mocks.md"
echo "3. Implement only the active feature"
echo "4. Re-run verification before claiming done"
