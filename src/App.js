import React, { Component } from "react"
import styled from "styled-components"
import { ThemeProvider, Wrapper } from "@staccx/base"
import { BrowserRouter as Router } from "react-router-dom"
import Stepper from "./components/StepIndicator"
import { themeLaser } from "./theme/themeLaser"
import StepContent from "./components/StepContent"

const elementStyles = `
  html, h1, h2, h3, h4, h5, h6 {
    font-family: 'Libre Franklin', sans-serif;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
  }
`

// const laserThemeFunction = () => themeLaser

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={themeLaser} resets={elementStyles}>
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

const StyledWrapper = styled(Wrapper)`
  min-height: 100px;
`

export default App
