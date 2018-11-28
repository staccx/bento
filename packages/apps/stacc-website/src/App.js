import React, { Component } from "react"
import styled, { ThemeProvider, css } from "styled-components"
import { State, GlobalStyle, WebFonts } from "@staccx/base"
import { SanityProvider } from "@staccx/sanity"
import { Router } from "react-router-dom"
import createHistory from "history/createBrowserHistory"
import theme from "./theme/Theme"
import * as typeformEmbed from "@typeform/embed/lib/api"
import AppInner from "./App.Inner"

const asciiArt = `
                            \`-ohy+-\`
                         ./shmmddmdhs/.
                     \`-+ydmmds/.-+ydmmdy+-\`
                  \`:shdmmho:\`      .:sdmmdho:\`
              \`-+ydmddy+.              -odmmmdy+.\`
           .:ohmmdho:.              \`./sdmmdhhdmdho:\`
        -+ydmmdy+-\`              \`-+ydmmds/.\`\`-+ydmdhs/.
    \`:ohdmmds/.               \`:shdmmho:\`       \`./sdmmdh+-\`
    +mmmmd+.              \`-+ydmmdy+.               .odmmmd+
    +mmmdmdhs/.        .:ohdmdhs:.               ./shmmdmmd+
    +mmd-+ydmmdy+-\`\`-/ydmmdy+-\`              \`-+ydmmhs/-mmd+
    +mmd   .:odmmdhhdmmds/.               \`:shdmmho-\`  \`mmd+
    +mmd       -+ydmmmd+.\`            \`-+ydmmmh+.      \`mmd+
    +mmd          ./shdmdho:\`      .:ohmmdddmm+        \`mmd+
    +mmd             \`-+ydmdhs/.-+ydmmdy+--ymm+        \`mmd+
    +mmd:\`              \`./sdmmddmmds/.   .ymm+        \`mmd+
    +mmmmdy/.\`              \`:hmmy-\`      .ymm+        \`mmd+
    +mmdshdmdho:\`             ymms        .ymm+        \`mmd+
    +mmd \`-+ydmmhs/.          ymms        .ymm+        \`mmd+
    +mmd    \`./sdmmdho-       ymms        .ymm+        \`mmd+
    +mmd        \`:ohdmmds/.   ymms        .ymm+        \`mmd+
    +mmd           \`-/ydmmdy+-hmms        .ymm+        \`mmd+
    +mmd               .:ohdmdmmms        .ymm+        \`mmd+
    +mmmh+-\`              \`-+ydmms        .ymm+     \`:ohmmd+
    \`:ohdmmds/.               ymms        .ymm+ \`./sdmmdh+-\`
        -+ydmmdy+-\`           ymms        .ymmsoydmdhs/.
           .:ohdmdho:.        ymms        -ymmmmdho:\`
              \`-+ydmddy+.     ymms     -+ydmmdy+.\`
                  \`:shdmmho:\`\`ymms .:sdmmdho:\`
                     \`-+ydmmdydmmhydmmdy+-\`
                         ./shmmmmmdhs/.        Stacc
                            \`-ohh+-\`           -  moving finance forward

`

class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      subMenuOpen: false,
      expanded: null,
      popup: typeformEmbed.makePopup("https://stacc.typeform.com/to/esvqjU", {
        hideFooter: true,
        hideHeaders: true,
        autoOpen: false,
        autoClose: 500,
        opacity: 0
      })
    }

    this.openContactForm = this.openContactForm.bind(this)
    this.closeContactForm = this.closeContactForm.bind(this)
  }

  openContactForm() {
    console.log("opening form")
    this.state.popup.open()
  }

  closeContactForm() {
    this.state.popup.close()
  }

  componentDidMount() {
    console.log("%c" + asciiArt, "color: #EB5E55;")
  }

  render() {
    const history = createHistory()

    return (
      <ThemeProvider theme={theme}>
        <SanityProvider dataset={"production"} projectId={"8j24leyc"} useCdn>
          <GlobalStyle />
          <WebFonts />
          <State>
            {({ change, hideMenu, inverted }) => {
              return (
                <Router history={history}>
                  <AppInner
                    change={change}
                    hideMenu={hideMenu}
                    inverted={inverted}
                    openContactForm={this.openContactForm}
                  />
                </Router>
              )
            }}
          </State>
        </SanityProvider>
      </ThemeProvider>
    )
  }
}

export default App
