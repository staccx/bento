import React from "react"
import { ThemeProvider } from "styled-components"
import {
  GlobalStyle,
  WebFonts,
  Wrapper,
  Heading,
  Layout,
  WidowFix
} from "@staccx/base"
// import { NordeaTheme } from "@staccx/nordea-theme"
import theme from "./theme/Theme"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper size={"medium"}>
        <GlobalStyle />
        <WebFonts />
        <Layout>
          <Heading level={2}>
            <WidowFix threshold={1}>
              General Data Protection Regulation
            </WidowFix>
          </Heading>
          <Heading level={2}>
            <WidowFix threshold={1}>Payment Service Directive 2</WidowFix>
          </Heading>
        </Layout>
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
