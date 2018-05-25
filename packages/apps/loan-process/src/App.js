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
          <EndScreen  />
          <hr style={{margin: "64px 0"}}/>
          <SetAccountNumber onValidated={console.log} />
          <hr style={{ margin: "64px 0" }} />
          <PresentOffer
          />
          <hr style={{ margin: "64px 0" }} />
          <RegisterSigners
            onComplete={console.log}
            people={[
              {
                name: "Espen Thomassen Sæverud",
                positions: ["Daglig leder", "Styreformann"]
              }
            ]}
          />

          <hr style={{ margin: "64px 0" }} />
          <Sign
            interestRate={10.4}
            loanAmount={1000000}
            monthlyPayment={83000}
            paybackTotal={1100000}
            renderDocumentText={type => "Låneavtale (placeholder)"}
            renderIllustration={() => null}
            repaymentPeriod={6}
            signOrders={[
              {
                signee: "21031531021",
                status: "UNSIGNED",
                requestId: "abc123",
                documentType: "DOCUMENT1",
                url: "https://web.test.fundu.no"
              },
              {
                signee: "21018612344",
                status: "UNSIGNED",
                requestId: "abc123",
                documentType: "DOCUMENT1",
                url: "https://web.test.fundu.no"
              },
              {
                signee: "21018612344",
                status: "SIGNED",
                requestId: "21rfe",
                documentType: "DOCUMENT2",
                url: "https://web.test.fundu.no"
              },
              {
                signee: "05088812312",
                status: "UNSIGNED",
                requestId: "abc123",
                documentType: "DOCUMENT1",
                url: "https://web.test.fundu.no"
              },
              {
                signee: "05088812312",
                status: "UNSIGNED",
                requestId: "21rfe",
                documentType: "DOCUMENT2",
                url: "https://web.test.fundu.no"
              }
            ]}
            signers={[
              {
                nationalId: "21031531021",
                id: "cba321",
                name: "ESPEN SÆVERUD",
                email: "espens@stacc.com"
              },
              {
                nationalId: "21018612344",
                id: "3orj",
                name: "Robin Sandborg",
                email: "robins@stacc.com"
              },
              {
                nationalId: "05088812312",
                id: "ewfsd",
                name: "Marius Hauken",
                email: "mariush@stacc.com"
              }
            ]}
            user={{ nationalId: "21031531021" }}
          />
          <hr style={{ margin: "64px 0" }} />
          <Complete
            onClick={console.log}
            illustrationUrl={"https://lorempixel.com/420/320/abstract/1/Sample"}
          />
        </div>
      </ThemeProxyProvider>
    )
  }
}

export default App
