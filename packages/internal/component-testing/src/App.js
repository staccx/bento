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
          <p />
          <p>
            <strong>Uten WidowFix:</strong>
          </p>
          <Heading level={2}>General Data Protection Regulation</Heading>
          <Heading level={2}>Payment Service Directive 2</Heading>
          <hr />
          <p>
            <strong>Default WidowFix (threshold = 7):</strong>
          </p>
          <Heading level={2}>
            <WidowFix threshold={7}>
              General Data Protection Regulation
            </WidowFix>
          </Heading>
          <Heading level={2}>
            <WidowFix threshold={7}>Payment Service Directive 2</WidowFix>
          </Heading>
          <hr />
          <p>
            <strong>&#60;WidowFix threshold={11}&#62;</strong>
          </p>
          <Heading level={2}>
            <WidowFix threshold={11}>
              General Data Protection Regulation
            </WidowFix>
          </Heading>
          <Heading level={2}>
            <WidowFix threshold={11}>Payment Service Directive 2</WidowFix>
          </Heading>
        </Layout>
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
