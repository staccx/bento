import React, { Component } from "react"
import { Select, Layout, LayoutItem, List, Box, Wrapper } from "@staccx/base"
import { ThemeProvider, ThemeConsumer, ThemeComponent } from "@staccx/Theme"
import Theme from "./theme.js"
import { NordeaTheme } from "@staccx/nordea-theme"
import AprilaTheme from "@staccx/aprila-theme"
import { FunduTheme } from "@staccx/fundu-theme"
import * as Components from "./generated/components.js"
import PreviewComponent from "./components/PreviewComponent"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Header from "./components/Header"

class App extends Component {
  constructor(props, context) {
    super(props, context)
    const themes = [Theme, AprilaTheme, NordeaTheme, FunduTheme].reduce(
      (acc, curr) => {
        acc[curr.name] = curr
        return acc
      },
      {}
    )
    this.state = {
      componentThemeName: AprilaTheme.name,
      themes
    }
  }

  render() {
    return (
      <Router>
        <ThemeProvider themeName={"Stacc"} themes={this.state.themes}>
          <Layout grid="dashboard">
            <LayoutItem area="sidebar" variant="sidebar">
              <Box variant="styleGuideHeader">
                <ThemeComponent tagName={"logo"} fallback={null} />
              </Box>
              <Box variant="documentationMenu">
                <List variant="documentationMenu">
                  {Reflect.ownKeys(Components).map(key => {
                    const comp = Components[key]
                    return (
                      <li key={key}>
                        <Link to={`/component/${comp.title}`}>
                          {comp.title}
                        </Link>
                      </li>
                    )
                  })}
                </List>
              </Box>
            </LayoutItem>
            <LayoutItem area="main">
              <Header>
                <ThemeConsumer themeName={"main"}>
                  {({ themes }) => {
                    return (
                      <Select
                        items={Object.keys(themes).map(key => themes[key])}
                        itemToString={item => item.name}
                        itemToKey={item => item.name}
                        selectedItem={themes[this.state.componentThemeName]}
                        onChange={theme =>
                          this.setState({ componentThemeName: theme.name })
                        }
                      />
                    )
                  }}
                </ThemeConsumer>
              </Header>
              <Wrapper size="documentation">
                <Route
                  path={"/component/:component"}
                  render={({ match }) => {
                    if (Components.hasOwnProperty(match.params.component)) {
                      return (
                        <PreviewComponent
                          componentThemeName={this.state.componentThemeName}
                          component={Components[match.params.component]}
                        />
                      )
                    }

                    return <div>No such component {match.params.component}</div>
                  }}
                />
              </Wrapper>
            </LayoutItem>
          </Layout>
        </ThemeProvider>
      </Router>
    )
  }
}

export default App
