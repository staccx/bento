import React, { Component } from "react"
import { Switch, BrowserRouter as Router, Route } from "react-router-dom"
import { ThemeComponent, Layout, LayoutItem, Box, Wrapper } from "@staccx/base"
import SwaggerDocs from "./pages/SwaggerDocs"
import Introduction from "./pages/Introduction"
import Menu from "./components/Menu/Menu"
import Header from "./components/Header/Header"
import Login from "./pages/Login"

import fakeMenu from "./_fakeData/fakeMenu"
import ApiReference from "./pages/ApiReference"
import OpenApiProvider from "./components/OpenApiProvider"
import PropTypes from "prop-types"
class App extends Component {
  render() {
    if (
      window.sessionStorage.getItem("stacc_access_token") === null &&
      !window.location.pathname.startsWith("/login") &&
      window.location.pathname !== "/callback"
    ) {
      console.log(
        window.sessionStorage.getItem("stacc_access_token"),
        "is null and pathname is",
        window.location.pathname
      )
      window.location.replace("/login")
    }

    return (
      <OpenApiProvider url={this.props.openApiUrl}>
        <Router>
          <Layout grid="dashboard" variant="responsiveDashboard">
            <LayoutItem area="aside" variant="sidebar">
              <Box variant="header">
                <ThemeComponent tagName={"logo"} fallback={null} />
              </Box>
              <Box variant="documentationMenu">
                <Menu data={fakeMenu} />
              </Box>
            </LayoutItem>
            <LayoutItem area="main">
              <Header />
              <Wrapper size="documentation">
                <Switch>
                  <Route path="/" component={Introduction} exact />
                  <Route path="/swagger" component={SwaggerDocs} exact />
                  <Route path="/api-reference" component={ApiReference} />
                  <Route path="/login" component={Login} />
                  <Route path="/callback" component={Login} />
                  {/* <Route */}
                  {/* path="/api-reference/:path" */}
                  {/* render={({ match }) => { */}
                  {/* return null */}
                  {/* }} */}
                  {/* /> */}
                  {/* <Route path={"/api"} exact component={ApiReference} /> */}
                </Switch>
              </Wrapper>
            </LayoutItem>
          </Layout>
        </Router>
      </OpenApiProvider>
    )
  }
}

App.propTypes = {
  openApiUrl: PropTypes.string.isRequired
}

export default App
