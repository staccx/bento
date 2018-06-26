import React, { Component } from "react"
import { Switch, BrowserRouter as Router, Route } from "react-router-dom"
import { ThemeProxyProvider, ThemeComponent } from "@staccx/theme"
import { Layout, LayoutItem, Box, List, Wrapper } from "@staccx/base"
import DocsTheme from "./Theme/Theme"
import SwaggerDocs from "./pages/SwaggerDocs"
import Introduction from "./pages/Introduction"
import Menu from "./components/Menu/Menu"

import fakeMenu from "./_fakeData/fakeMenu"

class App extends Component {
  render() {
    return (
      <ThemeProxyProvider theme={DocsTheme}>
        <Router>
          <Layout grid="dashboard" variant="responsiveDashboard">
            <LayoutItem area="sidebar" variant="sidebar">
              <Box variant="header">
                <ThemeComponent tagName={"logo"} fallback={null} />
              </Box>
              <Box>
                <Menu data={fakeMenu} />
              </Box>
            </LayoutItem>
            <LayoutItem area="main">
              <Box variant="header" />
              <Wrapper>
                <Switch>
                  <Route path="/" component={Introduction} exact />
                  <Route path="/swagger" component={SwaggerDocs} exact />
                </Switch>
              </Wrapper>
            </LayoutItem>
          </Layout>
        </Router>
      </ThemeProxyProvider>
    )
  }
}

export default App
