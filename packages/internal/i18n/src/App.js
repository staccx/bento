import React, { Component } from "react"
import { Button, Heading, Wrapper, Text } from "@staccx/base"
import { ThemeProxyProvider } from "@staccx/theme"
import theme from "./theme.js"
import LanguageProvider from "./Components/LanguageProvider"
import TranslatedText from "./Components/TranslatedText"
import LanguageSettings from "./Components/LanguageSettings"
import i18n from "./i18n"

const i18nConfig = {
  texts: {
    HELLO: {
      nb: "Heisann",
      en: "Hi there"
    }
  },
  language: "en",
  languages: ["nb", "en"],
  debug: true
}

setTimeout(() => {
  const val = i18n.translate("HELLO")
  console.log("using singleton to translate", val)
}, 1000)

class App extends Component {
  constructor(props, context) {
    super(props, context)

    setTimeout(() => {
      this.setState()
    }, 1000)
  }

  render() {
    return (
      <ThemeProxyProvider theme={theme}>
        <LanguageProvider {...i18nConfig}>
          <Wrapper size={"medium"}>
            <Text>
              <TranslatedText i18nKey={"HELLO"} />
            </Text>
            <TranslatedText i18nKey={"HELLO"}>
              {value => <Heading>{value}</Heading>}
            </TranslatedText>
            <TranslatedText i18nKey={"HELLO"}>
              {value => <Button>{value}</Button>}
            </TranslatedText>
            <LanguageSettings />
          </Wrapper>
        </LanguageProvider>
      </ThemeProxyProvider>
    )
  }
}

export default App
