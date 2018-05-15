import React, { Component } from "react"
import { ThemeProxyProvider } from "@staccx/theme"
import SetAccountNumber from "./module/SetAccountNumber"
import theme from "./theme.js"

class App extends Component {
  render() {
    return (
      <ThemeProxyProvider theme={theme}>
        {/*<RegisterSigners />
        <LoanRejected />
        <Sign />
        <TakesTime />
        <ProvideAdditionalInfo />
        <RejectOffer />
        <Manual />
        <CompleteProcess />
        <Offer />*/}
        <SetAccountNumber onValidated={console.log}/>
      </ThemeProxyProvider>
    )
  }
}

export default App
