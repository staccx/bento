import React, { Component } from "react"
import { Button, Heading, Wrapper, Text } from "@staccx/base"
import { ThemeProxyProvider } from "@staccx/theme"
import theme from "./theme.js"
import LanguageProvider from "./Components/LanguageProvider"
import TranslatedText from "./Components/TranslatedText"
import LanguageSettings from "./Components/LanguageSettings"

class App extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      texts: null,
      language: null,
      languages: []
    }
    this.setLanguage = this.setLanguage.bind(this)

    setTimeout(() => {
      this.setState({
        texts: {
          HELLO: {
            nb: "Heisann",
            en: "Hellpo"
          }
        },
        language: "en",
        languages: ["nb", "en"]
      })
    }, 1000)
  }

  setLanguage(e) {
    const language = e.target.value
    console.log(this, language)
    this.setState({ language })
  }

  render() {
    return (
      <ThemeProxyProvider theme={theme}>
        <LanguageProvider {...this.state} setLanguage={this.setLanguage}>
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
