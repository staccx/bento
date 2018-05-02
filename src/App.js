import React, { Component } from "react"
import { Wrapper } from "@staccx/base"
import { ThemeProvider } from "styled-components"
import NorfjellTheme, {init as initNorfjell} from "./Theme/Norfjell/Theme"
import AprilaTheme, { init as initAprila } from "./Theme/Aprila/Theme"
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
      activeTheme: AprilaTheme
    }
    this.toggleTheme = this.toggleTheme.bind(this)
  }

  componentWillMount() {
    initNorfjell()
    initAprila()
  }

  toggleTheme() {
    console.log("Switching away from " + this.state.activeTheme.Theme.name)
    if (this.state.activeTheme.Theme.name === "Aprila") {
      console.log("Setting theme to Norfjell")
      this.setState({
        activeTheme: NorfjellTheme
      })
      initNorfjell()
    } else {
      console.log("Setting theme to aprila")
      this.setState({
        activeTheme: AprilaTheme
      })
      initAprila()
    }
  }

  render() {
    console.log(this.state.activeTheme)
    return (
      <ThemeProvider theme={this.state.activeTheme.Theme}>
        <Provider customer={customer} account={account}>
          <Wrapper size="small">
            <Grid>
              <Account />
              <Transactions />
              <Menu />
            </Grid>
            <button onClick={this.toggleTheme}>Switch theme</button>
          </Wrapper>
        </Provider>
      </ThemeProvider>
    )
  }
}

export default App
