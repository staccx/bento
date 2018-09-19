import React, { Component } from "react"
import { Wrapper, Layout, Paragraph } from "@staccx/base"
import { ThemeProxyProvider } from "@staccx/theme"
import { BrowserRouter as Router } from "react-router-dom"
import theme from "./theme/Theme"
// import { instance } from "./api"
import io from "socket.io-client"
import Package from "./components/Package"

class App extends Component {
  constructor(props) {
    super(props)
    const socket = io("/")

    socket.on("init", ({ packages }) => {
      this.setState({ packages })
    })
    // socket.on("write log", data => {
    //   this.setState({ log: this.state.log + data })
    // })

    this.state = {
      log: "",
      socket,
      packages: []
    }
  }

  render() {
    return (
      <ThemeProxyProvider theme={theme}>
        <Router>
          <Layout variant={"fourByFour"}>
            {this.state.packages.map(pkg => (
              <Package pkg={pkg} socket={this.state.socket} />
            ))}
          </Layout>
        </Router>
      </ThemeProxyProvider>
    )
  }
}

export default App
