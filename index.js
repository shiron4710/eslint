module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  plugins: ["unused-imports"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    quotes: ["error", "double"],
    eqeqeq: "error",
    "handle-callback-err": "warn",
    "eol-last": ["error", "always"],
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports-ts": "warn",
    "@typescript-eslint/quotes": ["error", "double"],
    "comma-dangle": ["error", "always-multiline"],
    semi: ["error", "always"],
    indent: ["error", 2],
  },
};
