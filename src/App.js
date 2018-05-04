import React, { Component } from "react"
import { Provider } from "mobx-react"
import styled, { injectGlobal, ThemeProvider } from "styled-components"
import { HotKeys } from "react-hotkeys"
import { hideVisually, Layout, LayoutItem, Box } from "@staccx/base"
import { ThemeComponent } from "@staccx/theme"
import AprilaTheme from "./Theme/Aprila/Theme"
import NorfjellTheme from "./Theme/Norfjell/Theme"
import Account from "./components/Account"
import Transactions from "./components/Transactions"
import Deposit from "./pages/Deposit"
import Withdraw from "./pages/Withdraw"
import Ad from "./components/Ad"

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
    this.onThemeChanged = this.onThemeChanged.bind(this)
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
    console.log("Switching away from " + this.state.activeTheme.name)
    if (this.state.activeTheme.name === "Aprila") {
      this.setState(
        {
          activeTheme: NorfjellTheme
        },
        this.onThemeChanged
      )
    } else {
      this.setState(
        {
          activeTheme: AprilaTheme
        },
        this.onThemeChanged
      )
    }
  }

  onThemeChanged() {}

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
      deposit: () => this.setPage("deposit"),
      withdraw: () => this.setPage("withdraw")
    }

    injectGlobal`
      ${this.state.activeTheme.reset(this.state.activeTheme)};
      ${this.state.activeTheme.global};
      .${Math.random()}-test { }
    `

    console.log(this.state.activeTheme.layout)

    return (
      <div>
        <ThemeProvider theme={this.state.activeTheme}>
          <Provider customer={customer} account={account}>
            <HotKeysHandler keyMap={keyMap} handlers={handlers} focused>
              <input ref={c => (this._container = c)} />
              <Box variant="headerContainer">
                <Layout grid={this.state.activeTheme.layout.dashboardLayout}>
                  <Hero>
                    <ThemeComponent tagName={"logo"} fallback={Ad} />
                    <Account />
                  </Hero>
                </Layout>
              </Box>
              <Layout grid={this.state.activeTheme.layout.dashboardLayout}>
                <LayoutItem area="body">
                  <Transactions />
                </LayoutItem>
                <LayoutItem area="main">
                  <ThemeComponent tagName={"menu"} pages={pages} />
                </LayoutItem>
                <LayoutItem area="aside">
                  <Ad />
                </LayoutItem>
              </Layout>
              {this.state.currentPage === "deposit" && <Deposit />}
              {this.state.currentPage === "withdraw" && <Withdraw />}
            </HotKeysHandler>
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

const Hero = styled(LayoutItem)`
  grid-area: header / 2 / footer / -2;
`

export default App
