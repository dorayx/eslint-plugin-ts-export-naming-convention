# eslint-plugin-ts-export-naming-convention

An ESLint plugin to enforce naming conventions for TypeScript exports.

## Getting Started

1. Install dependencies

- [typescript-eslint](https://typescript-eslint.io/getting-started/): enables ESLint and Prettier to support TypeScript
- eslint-plugin-ts-export-naming-conventions

```bash
yarn add -D \
  eslint \
  typescript \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint-plugin-ts-export-naming-convention
```

2. Add the plugin to your ESLint config

```js
// .eslintrc.cjs
module.exports = {
  plugins: [
    'plugin:@typescript-eslint/recommended', // <-- more configurations found on https://typescript-eslint.io/linting/configs#recommended-configurations
    'plugin:ts-export-export-naming-convention/recommended', // <-- apply the plugin
  ],
  parser: '@typescript-eslint/parser',
};
```

## Rules

### Interfaces & Type Aliases

- Interfaces & type aliases should be in format of PascalCase

```ts
// ✅ PascalCase
export interface IProps {}
export type TProps = {};

// ❌ camelCase
export interface iProps {}
export type tProps = {};
```

- Exported interface should be prefixed with `I`

```ts
// ✅ `IProps` interface is exported
export interface IProps {}

// ❌ `Props` interface is exported
export interface Props {}

// ✅ `AnotherProps` interface is NOT exported
interface AnotherProps {}
```

- Exported type alias should be prefixed with `T`

```ts
// ✅ `TProps` type alias is exported
export type TProps = {};

// ❌ `Props` type alias is exported
export type Props = {};

// ✅ `AnotherProps` type alias is NOT exported
type AnotherProps = {};
```
