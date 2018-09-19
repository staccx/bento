import React, { Component } from "react"
import { Wrapper, List, ExpandListItem, Button } from "@staccx/base"
import { ThemeProxyProvider } from "@staccx/theme"
import { BrowserRouter as Router } from "react-router-dom"
import theme from "./theme/Theme"

class App extends Component {
  render() {
    return (
      <ThemeProxyProvider theme={theme}>
        <Router>
          <Wrapper>
            <List>
              <ExpandListItem title={"name"}>
                <Button onClick={() => require("./commands/list")}>
                  Load
                </Button>
              </ExpandListItem>
            </List>
          </Wrapper>
        </Router>
      </ThemeProxyProvider>
    )
  }
}

export default App
