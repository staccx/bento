import React, { Component } from "react"
import { ThemeProvider } from "styled-components"
import theme from "@staccx/aprila-theme"
import { Button, WebFonts, GlobalStyle, Wrapper, theming } from "@staccx/base"
import Schema from "./components/Schema"
import styled from "styled-components"

import { onboardin1 } from "./data/schemas"

const chosen = onboardin1
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <WebFonts />
          <StyledWrapper size="small" variant="schemaWrapper">
            <Schema
              schema={chosen.schema}
              uiSchema={chosen.uiSchema}
              onSubmit={console.log}
            >
              <StyledButton type={"submit"}>
                Hei jeg er overskrevet
              </StyledButton>
            </Schema>
          </StyledWrapper>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

const StyledWrapper = styled(Wrapper)`
  padding-left: ${theming.spacing.large};
  padding-right: ${theming.spacing.large};
`

const StyledButton = styled(Button)`
  margin-top: ${theming.spacing.huge};
`

export default App
