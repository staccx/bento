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
          <SetAccountNumber onValidated={console.log} />
          <hr style={{ margin: "64px 0" }} />
          <PresentOffer
            loanAmount={100000}
            onComplete={console.log}
            onRejected={console.log}
            paybackTotal={101000}
            repaymentPeriod={6}
            acceptOfferButtonText={"Fortsett"}
            company={{ name: "Stacc X", orgNo: "912319123" }}
            companyHeadingPrefixText={"Selskap"}
            handleChangeCustomAmount={console.log}
            handleChangeLoanDuration={console.log}
            headingText={"Lånetilbud"}
            isValid={false}
            loanDurationText={"Låneperiode"}
            maxAmount={1000000}
            maxLoanAmountText={"Max låne"}
            minAmount={50000}
            monthlyFees={4000}
            monthlyFeeText={"Månedlig kostnad"}
            monthlyPayment={84000}
            nationalIdPrefixText={"Personnummer"}
            orgNumberPrefixText={"Organisasjonsnummer"}
            paybackText={"Å betale tilbake"}
            payMonthlyText={"Å betale hver måned"}
            potentialDurations={[6, 3]}
            rejectOfferButtonText={"Avslå"}
            selectedDuration={6}
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
            renderDocumentText={type => "dokument"}
            renderIllustration={() => null}
            repaymentPeriod={6}
            signOrders={[
              {
                signee: "21031531021",
                status: "UNSIGNED",
                requestId: "abc123",
                documentType: "DOKUMENT1",
                url: "https://web.test.fundu.no"
              }
            ]}
            signers={[
              {
                nationalId: "21031531021",
                id: "cba321",
                name: "ESPEN SÆVERUD",
                email: "espens@stacc.com"
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
