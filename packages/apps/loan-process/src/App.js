import React, { Component } from "react"
import styled from "styled-components"
import { ThemeProxyProvider } from "@staccx/theme"
import { ThemeStyrke, ThemeFundu } from "./theme.js"
import Sign from "./module/Sign"
// import Authenticate from "./module/Authenticate"
// import PresentOffer from "./module/PresentOffer"
// import ProvideAdditionalInfo from "./module/ProvideAdditionalInfo"
import RegisterSigners from "./module/RegisterSigners"
import SetAccountNumber from "./module/SetAccountNumber"
import PresentOffer from "./module/PresentOffer"
import EndScreen from "./module/EndScreen"
import PersonalFinance from "./module/PersonalFinance"
import Calculator from "./module/Calculator"

class Content extends Component {
  render() {
    return (
      <ThemeProxyProvider theme={this.props.theme}>
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
          <Calculator onValidated={console.log} />
          <hr style={{ margin: "64px 0" }} />
          <Calculator
            onValidated={console.log}
            productType={"PRODUCT_CREDIT"}
            priceExampleText="Effektiv rente 11,56 %. Lånet gis med fastrente i hele lånets løpetid. Priseksempel: 500 000 over 12 mnd, eff. rente 11,56 % kostnader 26 232, totalt 526 232. "
            downPaymentPerMonthText="Renter første måned (hvis hele kreditten er brukt)"
            valueLabel="Kredittramme"
            headingText="Fleksibel kreditt når du trenger det"
            showTotalMonthly={false}
          />
          <hr style={{ margin: "64px 0" }} />
          <PersonalFinance onValidated={console.log} />
          <hr style={{ margin: "64px 0" }} />
          <EndScreen
            headingText="Søknaden er til behandling"
            content={
              <div>
                Her står det litt om hva vi sier til deg på denne siden og evt.
                hvorfor
              </div>
            }
            buttonContent="Gå til min side"
            img={
              <img
                src="https://cdn.sanity.io/images/4vjnya25/development/3f1931c6f8da404a7a5f7050c7652bc27c13059b-150x100.svg?w=420"
                alt={"placeholder"}
                width="420px"
              />
            }
          />
          <hr style={{ margin: "64px 0" }} />
          <SetAccountNumber />
          <hr style={{ margin: "64px 0" }} />
          <PresentOffer />
          <hr style={{ margin: "64px 0" }} />
          <PresentOffer
            productType={"PRODUCT_CREDIT"}
            maxLoanAmountText={"Du kan få innvilget kassakreditt på inntil"}
            headingText={"Tilbud om kassakreditt"}
            showMonthlyFee={false}
            showPayback={false}
            payMonthlyText="Renter første måned (hvis hele kreditten er brukt)"
          />
          <hr style={{ margin: "64px 0" }} />
          <RegisterSigners />

          <hr style={{ margin: "64px 0" }} />
          <Sign />
          <hr style={{ margin: "64px 0" }} />
        </div>
      </ThemeProxyProvider>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Outer>
        <Item>
          <Content theme={ThemeFundu} />
        </Item>
        <Item>
          <Content theme={ThemeStyrke} />
        </Item>
      </Outer>
    )
  }
}

const Outer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Item = styled.div`
  flex-basis: 50%;
`

export default App
