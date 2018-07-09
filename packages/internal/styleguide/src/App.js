import React, { Component } from "react"
import { Wrapper, Select } from "@staccx/base"
import { ThemeProvider, ThemeConsumer } from "@staccx/Theme"
import theme from "./theme.js"
import { NordeaTheme } from "@staccx/nordea-theme"
import aprila from "@staccx/aprila-theme"
import * as Components from "./generated/components.js"
import PreviewComponent from "./components/PreviewComponent"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class App extends Component {
  constructor(props, context) {
    super(props, context)
    const themes = [theme, aprila, NordeaTheme].reduce((acc, curr) => {
      acc[curr.name] = curr
      return acc
    }, {})
    this.state = {
      componentThemeName: aprila.name,
      themes
    }
  }

  render() {
    return (
      <Router>
        <ThemeProvider themeName={"Styleguide"} themes={this.state.themes}>
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
          {Reflect.ownKeys(Components).map(key => {
            const comp = Components[key]
            return <Link to={`/component/${comp.title}`}>{comp.title}</Link>
          })}
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
        </ThemeProvider>
      </Router>
    )
  }
}

export default App
