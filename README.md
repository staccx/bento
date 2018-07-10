# Bento

## Getting started

### Prerequisites
You need the following to proceed
* node 10.6.0
* yarn 1.6.0 
* lerna 2.11.0  

To install tools, run
```
brew install nvm
nvm install 10.6.0
brew install yarn --without-node
yarn global add lerna@2.11.0
```

To initialize the monorepo, run the following
```
cd bento
lerna bootstrap
lerna link
lerna run build
```

To create a new app, run ```plop App```  
To create a new base component, run ```plop Component```

## Help! 

If something isn't working as expected, try running ```lerna run build```

If that doesn't solve your problem, try running
```
lerna clean
lerna bootstrap
lerna link
lerna run build
```




