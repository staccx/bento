import React, { Component } from "react"
import { Wrapper, Layout, Button, LayoutItem } from "@staccx/base"
import { ThemeProxyProvider } from "@staccx/theme"
import { BrowserRouter as Router } from "react-router-dom"
import theme from "./theme/Theme"
// import { instance } from "./api"
// import io from "socket.io-client"
import  { getPackages } from "./socket"
import Package from "./components/Package"
import Menu from "./components/Menu"

class App extends Component {
  constructor(props) {
    super(props)

    getPackages(({ packages }) => this.setState({ packages }))

    this.state = {
      log: "",
      packages: []
    }

    this.openStyleguide = this.openStyleguide.bind(this)
  }

  openStyleguide() {
    this.state.socket.emit("serve styleguide")
  }

  render() {
    return (
      <ThemeProxyProvider theme={theme}>
        <Router>
          <Layout grid="dashboard" variant="responsiveDashboard">
            <LayoutItem area="aside" variant="sidebar" menuOpen>
              <Menu />
            </LayoutItem>
            <LayoutItem variant={"main"}>
              <Button onClick={this.openStyleguide}>Open Styleguide</Button>
              <Button
                onClick={() => {
                  console.log("boostrap")
                }}
              >
                Bootstrap
              </Button>
              <Wrapper>
                {this.state.packages.map(pkg => (
                  <Package
                    key={pkg.name}
                    pkg={pkg}
                  />
                ))}
              </Wrapper>
            </LayoutItem>
          </Layout>
        </Router>
      </ThemeProxyProvider>
    )
  }
}

export default App
