import React, { Component } from "react"
import { Wrapper } from "@staccx/base"
import { BrowserRouter as Router } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <div>Fresh app smell...</div>
        </Wrapper>
      </Router>
    )
  }
}

export default App
