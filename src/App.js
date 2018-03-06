import React, {Component} from "react"
import {ThemeProvider, Wrapper} from "@staccx/base"
import {BrowserRouter as Router} from "react-router-dom"
import DevTools from "mobx-react-devtools"
import {inject, observer} from "mobx-react"
import Stepper from "./components/StepIndicator"
import {themeLaser} from "./theme/themeLaser"
import StepContent from "./components/StepContent"

const elementStyles = `
  html, h1, h2, h3, h4, h5, h6 {
    font-family: 'Libre Franklin', sans-serif;
  }
`

@inject("apiStore", "uiStore")
@observer
class App extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  render() {
    return (
      <ThemeProvider theme={themeLaser} resets={elementStyles}>
        <div style={{paddingTop: "48px"}}>
          <Router>
            <Wrapper>
              <Stepper/>
              <StepContent/>

            </Wrapper>
          </Router>
          <DevTools/>
        </div>
      </ThemeProvider>
    )
  }
}

export default App
