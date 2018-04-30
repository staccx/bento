import React, { Component } from "react"
import { Button, Wrapper } from "@staccx/base"
import { ThemeProvider } from "styled-components"
import fakeData from "./data/transactions"
import Account from "./components/Account"
import theme from "./theme.js"
import TransactionList from "./components/TransactionList/TransactionList"
import TransactionListItem from "./components/TransactionList/TransactionList.item"

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper size="small">
          <Account balance={917822.45} earned={17822.45} />
          <Button>My X Button</Button>
          <TransactionList>
            {fakeData.map(transaction => (
              <TransactionListItem
                heading={transaction.heading}
                date={transaction.date}
                amount={transaction.amount}
                key={transaction.id}
              />
            ))}
          </TransactionList>
        </Wrapper>
      </ThemeProvider>
    )
  }
}

export default App
