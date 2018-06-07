# Stacc X i18n

## Install

`yarn add @staccx/i18n`

## Usage

### LanguageProvider

```jsx
import React, { Component } from "react"

import { LanguageProvider } from "@staccx/i18n"

const i18nConfig = {
  texts: {
    HELLO: {
      nb: "Heisann",
      en: "Hello"
    }
  },
  language: "en",
  languages: ["nb", "en"]
}

class App extends Component {
  render() {
    return <LanguageProvider {...i18nConfig}>...your app</LanguageProvider>
  }
}
```

### TranslatedText

```js
import React, { Component } from "react"

import { TranslatedText } from "@staccx/i18n"

//inside a render
<p>
    <TranslatedText i18nKey="HELLO" />
</p>

//Or use renderprop
<TranslatedText i18nKey="HELLO">
    {translated => (
        <span>{translated}</span>
    )
    }
</TranslatedText>
```

### LanguageSettings

```jsx
import React, { Component } from "react"

import { TranslatedText } from "@staccx/i18n"

//inside a render
//👇 renders a SelectSimple
<LanguageSettings />

//Or use renderprop
<LanguageSettings>
    {({ setLanguage, language, languages }) => {
             return (
               <select
                 id={"languages"}
                 onChange={setLanguage}
                 defaultValue={language}
               >
                 {languages.map(lang => <option value={lang}>{lang}</option>)}
               </SelectSimple>
             )
           }}
</LanguageSettings>
```
