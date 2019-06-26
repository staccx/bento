# i18n (internationalization)
The localization of stuff

## Overview
* Basic concepts
* Usage
* Components
* Advanced usage

## Basic concepts
i18n is the process of showing different stuff to users in different places in the world.
Most commonly this is the translation of text, but it can also mean how currency or dates is formatted, or other stuff.

_Why should we do this?_
It is much harder to enable this in an app that has not implemented this at start, than afterwards.

_It's a hazzle_
No, it's not.

## Usage
i18n is part of @staccx/base. Import it from there. No extra dependency necessary.

`yarn add @staccx/base`

```
import {i18n} from "@staccx/base"
```

## Components

### Provider
This is required for the rest to work. Wrap your app with this (at least the part using Translate etc..)

Built on React context, this provides other components with the necessary functionality.
```
<i18n.Provider>
  <MyApp />
</i18n.Provider>
```

### usei18n
Hooks that gives access to `translate` and `transform`

### Translate
Component that translates key or fallbacks to children. Most important tool in this workflow

```
const {Translate} = i18n
...
<Translate i18n="myKey">This is the fallback</Translate>
````

### Transform
Useful for inline translated values
e.g
```
const {Provider, Transform} from i18n
const page = { header: {en: "So cool", no: "Så kult"}}
...
<Provider language="en">
  <Transform data={page.header} /> // -> So cool
  <Transform data={page.header}>{value => <Header text={value} />}</Transform> // -> So cool
</Provider>
```

### Consumer
React context consumer. Nowadays you probably want [usei18n]

```
<i18n.Consumer>{({translate}) => <div>{translate("my-key")</div>}</i18n.Consumer>
```

### withI18n
Use this if you want `translate` and `transform` to be props of the component
Again, you probably want [usei18n] or `Translate`/`Transform`

```
export default i18n.withI18n(MyComponent)
```


## Advanced usage
