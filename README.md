# Bento

## Getting started

```
brew install nvm
nvm install node
brew install yarn --without-node
yarn global add lerna
yarn global add plop
```

1. Development tools that are used by many packages (like prettier and eslint) should be added as `devDependencies` in package root `~/projects/bento`:
```
yarn add -WD prettier
```
2. Always use `peerDependencies` when depending on `styled-components` or other global-scope-dependant modules: 
```
yarn add -P styled-components
```
3. Direct dependencies used in your app or module should be added as dependencies to that package
```
yarn add my-dependency
```
4. Dependencies that are not used in production should be added as `devDependencies`
```
yarn add -D my-dev-dependency
```

### Initializing

When pulling changes from repo, packages and dependencies may have changed and you need to run:
```
lerna bootstrap
lerna run build
```

To create a new app, run `plop App`  
To create a new base component, run `plop Component`

## Help!

If something isn't working as expected, try running `lerna run build`

If that doesn't solve your problem, try running

```
rm -rf node_modules/ && lerna clean --yes && lerna bootstrap && lerna run build
```
