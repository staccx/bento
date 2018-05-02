import React, { Component } from "react"
import { Provider } from "mobx-react"
import styled, { ThemeProvider } from "styled-components"
import { HotKeys } from "react-hotkeys"
import { Wrapper, hideVisually } from "@staccx/base"
import NorfjellTheme, { init as initNorfjell } from "./Theme/Norfjell/Theme"
import AprilaTheme, { init as initAprila } from "./Theme/Aprila/Theme"
import { Grid } from "./components/Grid"
import Account from "./components/Account"
import Transactions from "./components/Transactions"
import Menu from "./components/Menu/Menu"
import Deposit from "./pages/Deposit"

import { account, customer } from "./state"

const keyMap = {
  switchTheme: "t"
}

class App extends Component {
  constructor(...props) {
    super(...props)
    this.state = {
      activeTheme: NorfjellTheme,
      currentPage: null
    }
    this.toggleTheme = this.toggleTheme.bind(this)
  }

  componentWillMount() {
    initNorfjell()
    initAprila()
  }

  componentDidMount() {
    this._container.focus()
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isFocused && this.props.isFocused) {
      this._container.focus()
    }
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

  setPage(pageName) {
    this.setState({
      currentPage: pageName
    })
  }

  render() {
    const handlers = {
      switchTheme: this.toggleTheme
    }

    const pages = {
      deposit: () => this.setPage("deposit")
    }

    return (
      <div>
        <HotKeysHandler keyMap={keyMap} handlers={handlers} focused>
          <input ref={c => (this._container = c)} />
        </HotKeysHandler>
        <ThemeProvider theme={this.state.activeTheme.Theme}>
          <Provider customer={customer} account={account}>
            <div>
              <Wrapper size="small">
                <Grid>
                  <Account />
                  <Transactions />
                  <Menu pages={pages} />
                </Grid>
              </Wrapper>
              {this.state.currentPage === "deposit" && <Deposit />}
            </div>
          </Provider>
        </ThemeProvider>
      </div>
    )
  }
}

const HotKeysHandler = styled(HotKeys)`
  &:focus {
    outline: 0;
  }

  > input {
    ${hideVisually};
  }
`

export default App
