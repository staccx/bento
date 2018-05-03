import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import { HotKeys } from 'react-hotkeys'
import { hideVisually, Layout, LayoutItem, BaseTheme } from '@staccx/base'
import AprilaTheme from './Theme/Aprila/Theme'
import NorfjellTheme from './Theme/Norfjell/Theme'
import Account from './components/Account'
import Transactions from './components/Transactions'
import Menu from './components/Menu/Menu'
import Deposit from './pages/Deposit'
import Ad from './components/Ad'

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
      deposit: () => this.setPage("deposit")
    }

    console.log(BaseTheme)
    console.log(this.state.activeTheme)
    injectGlobal`
    ${this.state.activeTheme.reset};
${this.state.activeTheme.global};`
    return (
      <div>
        <ThemeProvider theme={this.state.activeTheme}>
          <Provider customer={customer} account={account}>
            <HotKeysHandler keyMap={keyMap} handlers={handlers} focused>
              <input ref={c => (this._container = c)} />
              <Layout grid={this.state.activeTheme.dashboardLayout}>
                <LayoutItem area="header">
                  <Account />
                </LayoutItem>
                <LayoutItem area="body">
                  <Transactions />
                </LayoutItem>
                <LayoutItem area="aside">
                  <Layout grid="rows">
                    <LayoutItem>
                      <Menu pages={pages} />
                    </LayoutItem>
                    <LayoutItem>
                      <Ad />
                    </LayoutItem>
                  </Layout>
                </LayoutItem>
              </Layout>
              {this.state.currentPage === "deposit" && <Deposit />}
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

export default App
