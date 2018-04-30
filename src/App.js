import React, { Component } from "react"
import { Wrapper } from "@staccx/base"
import { ThemeProvider } from "styled-components"
import Theme from "./Theme/Theme"
import { Grid } from "./components/Grid"
import Account from "./components/Account"
import Transactions from "./components/Transactions"
import Menu from "./components/Menu/Menu"
import { Provider } from "mobx-react"
import { account, customer } from "./state"

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Provider customer={customer} account={account}>
          <Wrapper size="small">
            <Grid>
              <Account />
              <Transactions />
              <Menu />
            </Grid>
          </Wrapper>
        </Provider>
      </ThemeProvider>
    )
  }
}

export default App
