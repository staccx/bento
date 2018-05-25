import React, { Component } from "react"
import {
  PresentOffer,
  CompleteProcess,
  Sign,
  RegisterSigners,
  SetAccountNumber,
  EndScreen,
  ProvideAdditionalInfo
} from "@staccx/loan-process"
import { ThemeProxyProvider } from "@staccx/theme"
import theme from "./theme.js"

class App extends Component {
  render() {
    return (
      <ThemeProxyProvider theme={theme}>
        <div>
          <PresentOffer />
          <CompleteProcess />
          <Sign />
          <RegisterSigners />
          <SetAccountNumber />
          <EndScreen />
          <ProvideAdditionalInfo />
        </div>
      </ThemeProxyProvider>
    )
  }
}

export default App
