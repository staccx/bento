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
Again, you probably want [usei18n] or [Translate] or [Transform]

```
export default i18n.withI18n(MyComponent)
```

## Advanced usage

### Arrays
```
<Translate i18n={["key-one", "key-two"]} />
```
You can send arrays of keys to [Translate]. Works with both renderProps

The keys can even be of different types!

Also note that the value of the text in Sanity can be an array!

### Rich text
Translate will render sanity rich text

### Data values
Dynamic values can be parsed into a string. Just use the `{{nameOfProp}}` syntax.
`nameOfProp` must then be passed to the translate function or component

You can inject data to the k/v
```
<Translate key="some-key" data={{myValue: 10}} />
// If some-key="I have {{myValue}} apples" translate will send myValue into it making it "I have 10 apples"
```

#### Formatting
To format something pass the format as the second parameter to a dynamic prop. `{{nameOfProp, formatter}}`

Let's say you want to format currency, you'd do this:
`I have {{balance, currency}} in my bank account`. All we now need is to pass the balance to the translate.

NOTE: The formatter must correspond with a formatter, or you can roll your own

##### Custom formatter
[Provider] takes an optional `formatFunctions` prop. This in an object where the keys are the formatters mentioned above.

Lets make one

```
const formatFunctions = {
  reverse: input => {
    return input.split("").reverse().join("");
  }
}

//Then we pass that to the provider
<i18n.Provider formatFunctions={formatFunctions}>...
```

If we have a key with value `{{wat, reverse}}` and call
```
<Translate i18n="myKey" data={{wat: "not useful"}} />
```

The output would be `lufesu ton`

### Pluralisation
If you want pluralisation it is done on the cms side

```
baby="{{count}} baby"
baby_plural="{{count}} babies" //not that you never send _plural as a key.
```

The `count` data field is reserved for pluralisation
```
<Translate key="baby" data={{count: 1}} />
// 1 baby
<Translate key="baby" data={{count: 7}} />
// 7 babies
<Translate key="baby" data={{count: 0}} />
// 0 babies
```

You can also do intervals. For more, read this https://www.i18next.com/translation-function/plurals

### Context
You can create context to any key suffix it with underscore and your context

```
baby="baby"
baby_female="female baby"
baby_alien="alien baby"
baby_dog="puppy"
```

```
<Translate key="baby" data={{context: "alien"}} /> // alien baby
<Translate key="baby" data={{context: "dog"}} /> // puppy
```
