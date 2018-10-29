import React, { Component } from "react"
import styled, { ThemeProvider } from "styled-components"
import { Wrapper, State, GlobalStyle, WebFonts } from "@staccx/base"
import { SanityProvider } from "@staccx/sanity"
import { Router } from "react-router-dom"
import createHistory from "history/createBrowserHistory"
import theme from "./theme/Theme"
import { Footer, Header } from "./components/_codeSplitting"
import * as typeformEmbed from "@typeform/embed/lib/api"
import ScrollToTop from "./components/ScrollToTop"
import Routes from "./Routes"

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

  render() {
    const history = createHistory()
    console.log("%c" + asciiArt, "color: #EB5E55;")
    return (
      <ThemeProvider theme={theme}>
        <SanityProvider dataset={"production"} projectId={"8j24leyc"} useCdn>
          <State>
            {({ change, hideMenu, inverted }) => {
              return (
                <Router history={history}>
                  <PageWrapper>
                    <GlobalStyle />
                    <WebFonts/>
                    <Header
                      openContactForm={this.openContactForm}
                      hideMenu={hideMenu}
                      inverted={inverted}
                    />
                    <ScrollToTop />
                    <Wrapper>
                      <Main>
                        <Routes inverted={inverted} change={change} />
                      </Main>
                    </Wrapper>
                    <Footer openContactForm={this.openContactForm} />
                  </PageWrapper>
                </Router>
              )
            }}
          </State>
        </SanityProvider>
      </ThemeProvider>
    )
  }
}

const Main = styled.main`
  min-height: 99vh;
`

const PageWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`

export default App
