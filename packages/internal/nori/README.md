# App Boilerplate

## Install
```javascript
yarn add @staccx/nori
```

## Usage
```javascript
const sanityConfig = {
  dataset: "production",
  projectId: "qweqweq",
  useCdn: true
}

const i18nConfig = {
  language: "nb",
  languages: ["nb"],
  translationSchemaType: "translations"
}

class App extends Component {
  render() {
    return (
      <Nori
        theme={MyTheme}
        sanityConfig={sanityConfig}
        i18nConfig={i18nConfig}
        logLevel={5}
      >
        <Routing? />
      </Nori>
    )
  }
}
```
