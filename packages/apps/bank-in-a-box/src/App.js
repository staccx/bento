import React, { Component } from "react"
import { Provider } from "mobx-react"
import styled from "styled-components"
import { HotKeys } from "react-hotkeys"
import { hideVisually, Layout, LayoutItem, Box } from "@staccx/base"
import { ThemeComponent, spacing, ThemeProxyProvider } from "@staccx/theme"
import AprilaTheme from "./Theme/Aprila/Theme"
import NorfjellTheme from "./Theme/Norfjell/Theme"
import Account from "./components/Account"
import Transactions from "./components/Transactions"
import Deposit from "./pages/Deposit"
import Withdraw from "./pages/Withdraw"
import Profile from "./pages/Profile"
import Inbox from "./pages/Inbox"

import { account, customer } from "./state"

const keyMap = {
  switchTheme: "t"
}

class App extends Component {
  constructor(...props) {
    super(...props)
    this.state = {
      activeTheme: NorfjellTheme,
      currentPage: null,
      showAccountInfo: false
    }
    this.toggleTheme = this.toggleTheme.bind(this)
    this.onThemeChanged = this.onThemeChanged.bind(this)
    this.toggleAccountInfo = this.toggleAccountInfo.bind(this)
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

  toggleAccountInfo() {
    this.setState({
      showAccountInfo: !this.state.showAccountInfo
    })
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
      withdraw: () => this.setPage("withdraw"),
      profile: () => this.setPage("profile"),
      inbox: () => this.setPage("inbox")
    }

    return (
      <div>
        <ThemeProxyProvider theme={this.state.activeTheme}>
          <Provider customer={customer} account={account}>
            <HotKeysHandler keyMap={keyMap} handlers={handlers} focused>
              <input ref={c => (this._container = c)} />
              <Outer>
                <div>
                  <Box variant="headerContainer">
                    <Layout
                      grid={this.state.activeTheme.layout.dashboardLayout}
                    >
                      <Hero>
                        <ThemeComponent
                          tagName={"logo"}
                          inverted
                          fallback={null}
                        />
                        <Account
                          toggleInfo={this.toggleAccountInfo}
                          showAccountInfo={this.state.showAccountInfo}
                        />
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
                    <ThemeComponent tagName={"ad"} />
                  </Layout>
                </div>
                {this.state.currentPage === "deposit" && <Deposit />}
                {this.state.currentPage === "withdraw" && <Withdraw />}
                {this.state.currentPage === "profile" && <Profile />}
                {this.state.currentPage === "inbox" && <Inbox />}
                <ThemeComponent tagName={"footer"} />
              </Outer>
            </HotKeysHandler>
          </Provider>
        </ThemeProxyProvider>
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
  padding-top: ${spacing.large};
`

const Outer = styled.div`
  display: grid;
  align-content: space-between;
  height: 100vh;
`

export default App
