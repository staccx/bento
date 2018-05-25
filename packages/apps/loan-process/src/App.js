import React, { Component } from "react"
import { ThemeProxyProvider } from "@staccx/theme"
import theme from "./theme.js"
import Sign from "./module/Sign"
// import Authenticate from "./module/Authenticate"
// import PresentOffer from "./module/PresentOffer"
// import ProvideAdditionalInfo from "./module/ProvideAdditionalInfo"
import RegisterSigners from "./module/RegisterSigners"
import Complete from "./module/Complete"
import SetAccountNumber from "./module/SetAccountNumber"
import PresentOffer from "./module/PresentOffer"
import EndScreen from "./module/EndScreen"

class App extends Component {
  render() {
    return (
      <ThemeProxyProvider theme={theme}>
        {/* <RegisterSigners />
        <LoanRejected />
        <Sign />
        <TakesTime />
        <ProvideAdditionalInfo />
        <RejectOffer />
        <Manual />
        <CompleteProcess />
        <Offer /> */}

        <div>
          <EndScreen />
          <hr style={{ margin: "64px 0" }} />
          <SetAccountNumber />
          <hr style={{ margin: "64px 0" }} />
          <PresentOffer />
          <hr style={{ margin: "64px 0" }} />
          <RegisterSigners />

          <hr style={{ margin: "64px 0" }} />
          <Sign />
          <hr style={{ margin: "64px 0" }} />
          <Complete />
        </div>
      </ThemeProxyProvider>
    )
  }
}

export default App
