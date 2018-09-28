import React, { Component } from "react"
import { Wrapper } from "@staccx/base"
import { ThemeProxyProvider } from "@staccx/theme"
import { BrowserRouter as Router } from "react-router-dom"
import { imoveTheme } from "@staccx/imove-theme"
import Onboarding from "./components/Onboarding/Onboarding"
import Header from "./components/Header"

class App extends Component {
  render() {
    return (
      <ThemeProxyProvider theme={imoveTheme}>
        <Router>
          <div>
            <Header />
            <Wrapper size="small">
              <Onboarding />
            </Wrapper>
          </div>
        </Router>
      </ThemeProxyProvider>
    )
  }
}

export default App
