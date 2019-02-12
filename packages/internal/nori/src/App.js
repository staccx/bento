import React, { Component } from "react"
import { StaccTheme } from "@staccx/stacc-theme"
import { Button, ThemeComponent } from "@staccx/base"
import { TranslatedText } from "@staccx/i18n"
import Nori from "./components/Nori"

const sanityConfig = {
  dataset: "production",
  projectId: "1pb4gkca",
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
        theme={StaccTheme}
        sanityConfig={sanityConfig}
        i18nConfig={i18nConfig}
        logLevel={5}
      >
        <Button>
          <TranslatedText i18nKey={"annet"}>Bekreft</TranslatedText>
        </Button>
        <ThemeComponent tagName={"logo"} />
      </Nori>
    )
  }
}

export default App
