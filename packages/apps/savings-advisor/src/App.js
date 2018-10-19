import React, { Component } from "react"
import styled, { ThemeProvider } from "styled-components"
import { Wrapper } from "@staccx/base"
import { BrowserRouter as Router } from "react-router-dom"
import Stepper from "./components/StepIndicator"
import themeLaser from "./theme/themeLaser"
import StepContent from "./components/StepContent"

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={themeLaser}>
        <div style={{ paddingTop: "48px" }}>
          <Router>
            <StyledWrapper>
              <Stepper />
              <StepContent />
            </StyledWrapper>
          </Router>
        </div>
      </ThemeProvider>
    )
  }
}

export const StyledWrapper = styled(Wrapper)`
  min-height: 100px;
`

export default App
