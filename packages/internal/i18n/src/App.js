import React, { Component } from "react"
import { Button, Heading, Wrapper, Text } from "@staccx/base"
import { ThemeProvider } from "styled-components"
import theme from "./theme.js"
import LanguageProvider from "./Components/LanguageProvider"
import TranslatedText from "./Components/TranslatedText"
import LanguageSettings from "./Components/LanguageSettings"
import i18n from "./i18n"
import dateNowPlugin from "./plugins/date.now"
import formatCurrencyPlugin from "./plugins/format.currency"

export const i18nConfig = {
  texts: {
    HELLO: {
      nb: "Heisann, {name}, dagens dato: {date.now}, {currency(price)}",
      en: "Hi there, {name}, today is {date.now}, {currency(price)}"
    }
  },
  language: "en",
  languages: ["nb", "en"],
  data: { name: "Stacc X", price: 10000 },
  debug: true,
  plugins: [dateNowPlugin, formatCurrencyPlugin],
  pluginOptions: {
    timeNow: {
      en: {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      },
      nb: {
        weekday: "long"
      }
    },
    currency: {
      format: "%s %v",
      nb: {
        thousand: ".",
        symbol: "kr"
      },
      en: {
        thousand: " ",
        symbol: "$"
      }
    }
  }
}

setTimeout(() => {
  const val = i18n.translate("HELLO")
  console.log("using singleton to translate", val)
})

class App extends Component {
  constructor(props, context) {
    super(props, context)

    setTimeout(() => {
      this.setState()
    }, 1000)
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <LanguageProvider {...i18nConfig} debug>
          <Wrapper size={"medium"}>
            <Text>
              <TranslatedText i18nKey={"HELLO"} />
            </Text>
            <Text>
              <TranslatedText
                i18nKey={"ermagerdh"}
                fallback={"this is using fallback"}
              />
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
      </ThemeProvider>
    )
  }
}

export default App
