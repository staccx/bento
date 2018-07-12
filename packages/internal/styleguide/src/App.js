import React, { Component } from "react"
import {
  Select,
  Layout,
  LayoutItem,
  List,
  Box,
  Wrapper,
  Heading
} from "@staccx/base"
import { ThemeProvider, ThemeConsumer, ThemeComponent } from "@staccx/Theme"
import Theme from "./theme.js"
import { NordeaTheme } from "@staccx/nordea-theme"
import AprilaTheme from "@staccx/aprila-theme"
import { FunduTheme } from "@staccx/fundu-theme"
import { SavingsAdvisor } from "@staccx/savings-advisor"
import * as Previews from "./generated/components.js"
import PreviewComponent from "./components/PreviewComponent"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Header from "./components/Header"
import WidthTab from "./components/WidthTab"
import AppPreview from "./components/AppPreview"

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
      componentThemeName: Theme.name,
      themes,
      width: props.width
    }

    this.renderMenu = this.renderMenu.bind(this)
  }

  renderMenu(menu) {
    return Reflect.ownKeys(menu).map(key => {
      const { name, path, parent, ...rest } = menu[key]
      return (
        <li key={name}>
          {path && <Link to={`${path}`}>{`${name}`}</Link>}
          {!path && (
            <React.Fragment>
              <Heading level="3" variant="menuHeading">
                {name}
              </Heading>
              <List>{this.renderMenu(rest)}</List>
            </React.Fragment>
          )}
        </li>
      )
    })
  }

  render() {
    const previewArray = Reflect.ownKeys(Previews).map(key => Previews[key])

    let current = {}
    const getPath = (levels, deepness) =>
      levels.reduce(
        (acc, level, index) => (index <= deepness ? acc + `/${level}` : acc),
        ""
      )
    const menu = previewArray.reduce((acc, preview) => {
      if (!preview.category) {
        return acc
      }
      const levels = preview.category.split("/")
      levels.push(preview.title)

      levels.forEach((level, index) => {
        if (!current.hasOwnProperty(level)) {
          current[level] = {
            name: level,
            path: index === levels.length - 1 ? getPath(levels, index) : null,
            parent: index > 0 ? levels[index - 1] : null
          }
        }
        current = current[level]
      })
      acc = Object.assign({}, acc, current)
      current = acc
      return acc
    }, {})

    // TODO: Fix this. brain does not work
    delete menu.name
    delete menu.path
    delete menu.parent
    return (
      <Router>
        <ThemeProvider themeName={"Stacc"} themes={this.state.themes}>
          <Layout grid="dashboard">
            <LayoutItem area="sidebar" variant="sidebar">
              <Box variant="styleGuideHeader">
                <ThemeComponent tagName={"logo"} fallback={null} />
              </Box>
              <Box variant="documentationMenu">
                <List variant="documentationMenu">{this.renderMenu(menu)}</List>
                <List variant="documentationMenu">
                  <Label>Apps</Label>
                  <li>
                    <Link to={"/apps/savings-advisor"}>Savings-Advisor</Link>
                  </li>
                </List>
              </Box>
            </LayoutItem>
            <LayoutItem area="main">
              <Header>
                <WidthTab
                  onChange={e => {
                    this.setState({ width: e.target.value })
                  }}
                />
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
                  path={"/apps/:app"}
                  exact
                  render={({ match }) => {
                    console.log(match.params)
                    switch (match.params.app) {
                      case "savings-advisor": {
                        return (
                          <AppPreview
                            app={<SavingsAdvisor />}
                            themeName={this.state.componentThemeName}
                            themes={this.state.themes}
                          />
                        )
                      }
                    }
                    return <SavingsAdvisor />
                  }}
                />
                {previewArray.map(comp => {
                  if (!comp.title) {
                    console.warn("Has no title", comp)
                    return null
                  }
                  return (
                    <Route
                      key={comp.title}
                      path={`/${comp.category}/${comp.title}`}
                      render={() => (
                        <PreviewComponent
                          componentThemeName={this.state.componentThemeName}
                          preview={comp}
                          width={this.state.width}
                        />
                      )}
                    />
                  )
                })}
              </Wrapper>
            </LayoutItem>
          </Layout>
        </ThemeProvider>
      </Router>
    )
  }
}

export default App
