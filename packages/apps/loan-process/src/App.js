import React, { Component } from "react"
import { ThemeProxyProvider } from "@staccx/theme"
import {
  RegisterSigners,
  LoanRejected,
  Sign,
  TakesTime,
  ProvideAdditionalInfo,
  RejectOffer,
  Manual,
  CompleteProcess,
  Offer,
  AccountNumber
} from "./export"
import theme from "./theme.js"

class App extends Component {
  render() {
    return (
      <ThemeProxyProvider theme={theme}>
        <RegisterSigners />
        <LoanRejected />
        <Sign />
        <TakesTime />
        <ProvideAdditionalInfo />
        <RejectOffer />
        <Manual />
        <CompleteProcess />
        <Offer />
        <AccountNumber />
      </ThemeProxyProvider>
    )
  }
}

export default App
