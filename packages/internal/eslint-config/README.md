# StaccX eslint-config

Shared eslint settings for @staccx. Based on prettier + standard. [Based on eslints own documentation of shareable-configs](https://eslint.org/docs/developer-guide/shareable-configs)

## Usage

`yarn add @staccx/eslint-config --dev`

Create .eslintrc in the root of your project

```
{
    "extends": "@staccx"
}
```

Create .prettierrc

```
{
  "semi": false
}
```

### Precommit linting

This package includes dependencies to [lint-staged](https://github.com/okonet/lint-staged) and [husky](https://github.com/typicode/husky). To run linting of staged files precommit you need to set this up.

Example package.json, see [lint-staged](https://github.com/okonet/lint-staged) for other options.

```
"scripts": {
  "precommit": "lint-staged"
},
"lint-staged": {
  "*.js": [
    "eslint",
    "git add"
  ]
}
```

### In a lerna repo

`yarn add @staccx/eslint-config --dev -W`

/package.json

```
"scripts": {
  "precommit": "lerna run --concurrency 1 --stream precommit",
}
```

/packages/my-package/package.json

```
"scripts": {
  "precommit": "lint-staged",
},
"lint-staged": {
  "*.js": [
    "eslint",
    "git add"
  ]
}
```
