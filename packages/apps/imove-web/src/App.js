import React, { Component } from "react"
import { ThemeProxyProvider } from "@staccx/theme"
import { BrowserRouter as Router } from "react-router-dom"
import { imoveTheme } from "@staccx/imove-theme"
import Header from "./components/Header/Header"
import Home from "./pages/Home"

class App extends Component {
  render() {
    return (
      <ThemeProxyProvider theme={imoveTheme}>
        <Router>
          <div>
            <Header />
            <main>
              <Home />
            </main>
          </div>
        </Router>
      </ThemeProxyProvider>
    )
  }
}

export default App
