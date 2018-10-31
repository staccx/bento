import React, { Component } from "react"
import { Button, Heading, Wrapper, Text, List } from "@staccx/base"
import { ThemeProvider } from "styled-components"
import theme from "./theme.js"
import LanguageProvider from "./Components/LanguageProvider"
import TranslatedText from "./Components/TranslatedText"
import LanguageSettings from "./Components/LanguageSettings"
import i18n from "./i18n"
import { i18nConfig } from "./config"

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
            <TranslatedText i18nKey={["listItem1", "listItem2", "listItem3"]}>
              {values => (
                <List>
                  {values.map(value => (
                    <li>
                      <Text>{value}</Text>
                    </li>
                  ))}
                </List>
              )}
            </TranslatedText>
            <TranslatedText i18nKey={["listItem4", "listItem5", "listItem6"]} fallback={["fallback1", "fallback2", "fallback3"]}>
              {values => (
                <List>
                  {values.map(value => (
                    <li>
                      <Text>{value}</Text>
                    </li>
                  ))}
                </List>
              )}
            </TranslatedText>
            <LanguageSettings />
          </Wrapper>
        </LanguageProvider>
      </ThemeProvider>
    )
  }
}

export default App
