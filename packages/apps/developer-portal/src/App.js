import React, { Component } from "react"
import { ThemeProxyProvider, ThemeComponent } from "@staccx/theme"
import { Layout, LayoutItem, Box, List, Wrapper } from "@staccx/base"
import FunduTheme from "@staccx/fundu-theme"
import ApiRenderer from "./components/ApiRenderer"

class App extends Component {
  render() {
    return (
      <ThemeProxyProvider theme={FunduTheme}>
        <Layout grid="dashboard" variant="responsiveDashboard">
          <LayoutItem area="sidebar" variant="sidebar">
            <Box variant="header">
              <ThemeComponent tagName={"logo"} fallback={null} />
            </Box>
            <Box>
              <List>
                <li>Meny</li>
                <li>inn </li>
                <li>Her</li>
              </List>
            </Box>
          </LayoutItem>
          <LayoutItem area="main">
            <Box variant="header" />
            <Wrapper>
              <Layout paddingTop="large">
                <Box variant="codeBlock">
                  <ApiRenderer
                    url={"https://demo.quantfol.io/swagger/v1/swagger.json"}
                  />
                </Box>
                <Box variant="codeBlock">
                  <ApiRenderer
                    url={"http://petstore.swagger.io/v2/swagger.json"}
                  />
                </Box>
              </Layout>
            </Wrapper>
          </LayoutItem>
        </Layout>
      </ThemeProxyProvider>
    )
  }
}

export default App
