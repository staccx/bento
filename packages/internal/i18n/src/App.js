import React, { Component } from "react"
import { Button, Heading, Wrapper, Text } from "@staccx/base"
import { ThemeProxyProvider } from "@staccx/theme"
import theme from "./theme.js"
import LanguageProvider from "./Components/LanguageProvider"
import TranslatedText from "./Components/TranslatedText"
import LanguageSettings from "./Components/LanguageSettings"
import i18n from "./i18n"
import dateNowPlugin from "./plugins/date.now"

const i18nConfig = {
  texts: {
    HELLO: {
      nb: "Heisann, {name}, dagens dato: {date.now}",
      en: "Hi there, {name}, today is {date.now}"
    }
  },
  language: "en",
  languages: ["nb", "en"],
  data: { name: "Stacc X", time: new Date().toString() },
  debug: true,
  plugins: [dateNowPlugin],
  pluginOptions: {
    __default: {
      weekday: "long"
    },
    nb: {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }
  }
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
            <TranslatedText i18nKey={"HELLO"} data={{ name: "Stacc Flow" }}>
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
