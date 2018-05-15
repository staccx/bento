import React, { Component } from "react"
import { ThemeProxyProvider } from "@staccx/theme"
// import SetAccountNumber from "./module/SetAccountNumber"
import PresentOffer from "./module/PresentOffer"
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
        {/*<SetAccountNumber onValidated={console.log} />*/}
        <PresentOffer/>
      </ThemeProxyProvider>
    )
  }
}

export default App
