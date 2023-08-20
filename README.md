# shiron's ESLint Config

This is shiron's personal ESLint configuration for TypeScript projects.

## Installation

To use this configuration, you can install it via npm:

```bash
pnpm install -D @shiron-dev/eslint-config
```

## Usage

Add the following to your `.eslintrc.json` or `.eslintrc.js`:

```json
{
  "extends": [
    "@shiron-dev/eslint-config",
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

```js
module.exports = {
  extends: ["@shiron-dev/eslint-config"],
};
```

## Rules

- typescript(default)
- prettier
- jest
- next
- react
- storybook

If you want to use only some of the rules, you can specify them as follows:

`{rule}` is the name of the rule.
```json
{
  "extends": [
    "@shiron-dev/eslint-config",
    "@shiron-dev/eslint-config/{rule}",
  ]
}
```

## License

MIT License
