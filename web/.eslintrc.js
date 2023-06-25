module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ["react", "prettier", "jest"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["node_modules/"],
  rules: {
    "no-console": "error",
    "react/no-unknown-property": ["error", { ignore: ["jsx", "global"] }],
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "prettier/prettier": 0,
  },
};
