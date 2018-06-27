import React, { Component } from "react"
import { Switch, BrowserRouter as Router, Route } from "react-router-dom"
import { ThemeProxyProvider, ThemeComponent } from "@staccx/theme"
import { Layout, LayoutItem, Box, Wrapper } from "@staccx/base"
import DocsTheme from "./Theme/Theme"
import SwaggerDocs from "./pages/SwaggerDocs"
import Introduction from "./pages/Introduction"
import Menu from "./components/Menu/Menu"

import fakeMenu from "./_fakeData/fakeMenu"
import ApiReference from "./pages/ApiReference"

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
              <Wrapper size="documentation">
                <Switch>
                  <Route path="/" component={Introduction} exact />
                  <Route path="/swagger" component={SwaggerDocs} exact />
                  <Route path="/api-reference" component={ApiReference} exact />
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
