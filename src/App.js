import React, { Component } from "react"
import { ThemeProvider, Wrapper } from "@staccx/base"
import { BrowserRouter as Router } from "react-router-dom"
import Stepper from "./components/StepIndicator"
import { themeLaser } from "./theme/themeLaser"
import StepContent from "./components/StepContent"

const elementStyles = `
  html, h1, h2, h3, h4, h5, h6 {
    font-family: 'Libre Franklin', sans-serif;
  }
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={themeLaser} resets={elementStyles}>
        <div style={{ paddingTop: "48px" }}>
          <Router>
            <Wrapper>
              <Stepper />
              <StepContent />
            </Wrapper>
          </Router>
        </div>
      </ThemeProvider>
    )
  }
}

export default App
