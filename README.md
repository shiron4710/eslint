# @shiron-dev/eslint-config

[![npm](https://img.shields.io/npm/v/@shiron-dev/eslint-config?color=444&label=)](https://npmjs.com/package/@shiron-dev/eslint-config)

> Thanks to [@antfu/eslint-config](https://github.com/antfu/eslint-config), the source of this eslint-config customization!

- Auto fix for formatting (aimed to be used standalone **without** Prettier)
- Reasonable defaults, best practices, only one line of config
- Designed to work with TypeScript, JSX, Vue, JSON, YAML, Toml, Markdown, etc. Out-of-box.
- Opinionated, but [very customizable](#customization)
- [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new), compose easily!
- Optional [React](#react), [Svelte](#svelte), [UnoCSS](#unocss), [Astro](#astro), [Solid](#solid) support
- Optional [formatters](#formatters) support for formatting CSS, HTML, XML, etc.
- **Style principle**: Minimal for reading, stable for diff, consistent
  - Sorted imports, dangling commas
  - Single quotes, no semi
  - Using [ESLint Stylistic](https://github.com/eslint-stylistic/eslint-stylistic)
- Respects `.gitignore` by default
- Requires ESLint v9.5.0+

## Usage

### Starter Wizard

We provided a CLI tool to help you set up your project, or migrate from the legacy config to the new flat config with one command.

```bash
pnpm dlx @shiron-dev/eslint-config@latest
```

### Manual Install

If you prefer to set up manually:

```bash
pnpm i -D eslint @shiron-dev/eslint-config
```

And create `eslint.config.mjs` in your project root:

```js
// eslint.config.mjs
import shiron from "@shiron-dev/eslint-config";

export default shiron();
```

<details>
<summary>
Combined with legacy config:
</summary>

If you still use some configs from the legacy eslintrc format, you can use the [`@eslint/eslintrc`](https://www.npmjs.com/package/@eslint/eslintrc) package to convert them to the flat config.

```js
import { FlatCompat } from "@eslint/eslintrc";
// eslint.config.mjs
import shiron from "@shiron-dev/eslint-config";

const compat = new FlatCompat();

export default shiron(
  {
    ignores: [],
  },

  // Legacy config
  ...compat.config({
    extends: [
      "eslint:recommended",
      // Other extends...
    ],
  })

  // Other flat configs...
);
```

> Note that `.eslintignore` no longer works in Flat config, see [customization](#customization) for more details.

</details>

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## IDE Support (auto fix on save)

<details>
<summary>🟦 VS Code support</summary>

<br>

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Add the following settings to your `.vscode/settings.json`:

```jsonc
{
  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  // Silent the stylistic rules in you IDE, but still auto fix them
  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off", "fixable": true },
    { "rule": "format/*", "severity": "off", "fixable": true },
    { "rule": "*-indent", "severity": "off", "fixable": true },
    { "rule": "*-spacing", "severity": "off", "fixable": true },
    { "rule": "*-spaces", "severity": "off", "fixable": true },
    { "rule": "*-order", "severity": "off", "fixable": true },
    { "rule": "*-dangle", "severity": "off", "fixable": true },
    { "rule": "*-newline", "severity": "off", "fixable": true },
    { "rule": "*quotes", "severity": "off", "fixable": true },
    { "rule": "*semi", "severity": "off", "fixable": true }
  ],

  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml",
    "xml",
    "gql",
    "graphql",
    "astro",
    "svelte",
    "css",
    "less",
    "scss",
    "pcss",
    "postcss"
  ]
}
```

</details>

<details>
