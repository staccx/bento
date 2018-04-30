import React, { Component } from "react"
import { Wrapper } from "@staccx/base"
import { ThemeProvider } from "styled-components"
import NorfjellTheme from "./Theme/Norfjell/Theme"
import AprilaTheme from "./Theme/Aprila/Theme"
import { Grid } from "./components/Grid"
import Account from "./components/Account"
import Transactions from "./components/Transactions"
import Menu from "./components/Menu/Menu"
import { Provider } from "mobx-react"
import { account, customer } from "./state"

class App extends Component {
  constructor(...props) {
    super(...props)
    this.state = {
      activeTheme: NorfjellTheme
    }
    this.toggleTheme = this.toggleTheme.bind(this)
  }

  toggleTheme() {
    console.log("Switching away from " + this.state.activeTheme.name)
    if (this.state.activeTheme.name === "Aprila") {
      this.setState({
        activeTheme: NorfjellTheme
      })
    } else {
      this.setState({
        activeTheme: AprilaTheme
      })
    }
  }

  render() {
    return (
      <ThemeProvider theme={this.state.activeTheme}>
        <Provider customer={customer} account={account}>
          <Wrapper size="small">
            <Grid>
              <Account />
              <Transactions />
              <Menu />
            </Grid>
            <button onClick={() => this.toggleTheme()}>Switch theme</button>
          </Wrapper>
        </Provider>
      </ThemeProvider>
    )
  }
}

export default App
