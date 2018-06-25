import React, { Component } from "react"
import styled from "styled-components"
import { Wrapper } from "@staccx/base"
import { ThemeProxyProvider } from "@staccx/theme"
import { BrowserRouter as Router } from "react-router-dom"
import Stepper from "./components/StepIndicator"
import themeLaser from "./theme/themeLaser"
import StepContent from "./components/StepContent"

class App extends Component {
  render() {
    return (
      <ThemeProxyProvider theme={themeLaser}>
        <div style={{ paddingTop: "48px" }}>
          <Router>
            <StyledWrapper>
              <Stepper />
              <StepContent />
            </StyledWrapper>
          </Router>
        </div>
      </ThemeProxyProvider>
    )
  }
}

const StyledWrapper = styled(Wrapper)`
  min-height: 100px;
`

export default App
