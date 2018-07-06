import React, { Component } from "react"
import { Wrapper } from "@staccx/base"
import { ThemeProxyProvider } from "@staccx/Theme"
import theme from "./theme.js"
import { NordeaTheme } from "@staccx/nordea-theme"
import aprila from "@staccx/aprila-theme"
import { Button } from "@staccx/base/dist/lib/previews/index"
import { Button as Btn } from "@staccx/base"
import PreviewComponent from "./components/PreviewComponent"

class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      theme: NordeaTheme
    }
  }

  render() {
    return (
      <ThemeProxyProvider theme={this.state.theme}>
        <Wrapper>
          <Btn
            onClick={() => {
              if (this.state.theme.name === NordeaTheme.name) {
                this.setState({ theme: aprila })
              } else {
                this.setState({ theme: NordeaTheme })
              }
            }}
          >
            Change
          </Btn>
          <PreviewComponent component={Button} />
        </Wrapper>
      </ThemeProxyProvider>
    )
  }
}

export default App
