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
          <Footer>
            Made by <a href="http://stacc.com">Stacc X</a> <br />
            Powered by <a href="http://quantfol.io">Quantfolio</a>
          </Footer>
        </div>
      </ThemeProvider>
    )
  }
}

const Footer = styled.div`
  margin: auto;
  max-width: 200px;
  padding: 0 20px;
  text-align: center;
  color: #777;
  line-height: 1.7;
  a {
    color: #444;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

const StyledWrapper = styled(Wrapper)`
  min-height: 100px;
`

export default App
