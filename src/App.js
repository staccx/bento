import React, { Component } from "react"
import { Button, Wrapper } from "@staccx/base"
import { ThemeProvider } from "styled-components"
import Theme from "./Theme/Theme"
import Account from "./components/Account"
import Transactions from "./components/Transactions"
import { Provider } from "mobx-react"
import { account, customer } from "./state"

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Provider customer={customer} account={account}>
          <Wrapper size="small">
            <Account />
            <Transactions />
          </Wrapper>
        </Provider>
      </ThemeProvider>
    )
  }
}

export default App
