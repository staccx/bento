import React, { Component } from "react"
import {
  Wrapper,
  Layout,
  Button,
  LayoutItem,
  Search,
  Input
} from "@staccx/base"
import { ThemeProxyProvider } from "@staccx/theme"
import { BrowserRouter as Router } from "react-router-dom"
import theme from "./theme/Theme"
// import { instance } from "./api"
// import io from "socket.io-client"
import { getPackages } from "./socket"
import { SYSTEM_NAME } from "./contants"
import Package from "./components/Package"
import Menu from "./components/Menu"
import TerminalWindow from "./components/TerminalWindow"

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
    this.state.socket.emit("serve site", { pkg: "@staccx/styleguide" })
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
                {this.state.packages.length > 0 && (
                  <Search
                    documents={this.state.packages}
                    indexer={"name"}
                    indicises={["name", "version"]}
                  >
                    {({ result, search }) => {
                      // TODO: Add @staccx dependencies as indices
                      return (
                        <React.Fragment>
                          <Input
                            id={"packages"}
                            onChange={e => search(e.target.value)}
                            placeholder={"Package name"}
                          />
                          {result.map(pkg => (
                            <Package key={pkg.name} pkg={pkg} />
                          ))}
                        </React.Fragment>
                      )
                    }}
                  </Search>
                )}
              </Wrapper>
              <TerminalWindow name={SYSTEM_NAME} />
            </LayoutItem>
          </Layout>
        </Router>
      </ThemeProxyProvider>
    )
  }
}

export default App
