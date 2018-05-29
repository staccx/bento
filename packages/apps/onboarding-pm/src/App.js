import React, { Component } from "react"
import { ThemeProxyProvider } from "@staccx/theme"
import theme from "./theme.js"
import ClientInfo from "./Steps/ClientInfo"
import BankId from "./Steps/BankId"
import Consent from "./Steps/Consent"
import SanctionList from "./Steps/SanctionList"
import Foreign from "./Steps/Foreign"
import Confirmation from "./Steps/Confirmation"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: "clientInfo",
      origin: {
        salary: false,
        gift: false,
        inheritance: false,
        savings: false,
        property: false,
        other: false
      }
    }

    this.setOrigin = this.setOrigin.bind(this)
    this.setStep = this.setStep.bind(this)
  }

  setOrigin(checkedValue) {
    this.setState({
      origin: {
        ...this.state.origin,
        [checkedValue]: !this.state.origin[checkedValue]
      }
    })
  }

  setStep(stepName) {
    this.setState({
      currentStep: stepName
    })
  }

  render() {
    const steps = {
      clientInfo: () => this.setStep("clientInfo"),
      bankId: () => this.setStep("bankId"),
      consent: () => this.setStep("consent"),
      sanctionsList: () => this.setStep("sanctionsList"),
      foreign: () => this.setStep("foreign"),
      confirmation: () => this.setStep("confirmation")
    }
    return (
      <ThemeProxyProvider theme={theme}>
        <div>
          {this.state.currentStep === "clientInfo" && (
            <ClientInfo
              steps={steps}
              onOriginChange={this.setOrigin}
              onForeignChange={console.log}
              onSamtykkeChange={console.log}
            />
          )}
          {this.state.currentStep === "bankId" && <BankId steps={steps} />}
          {this.state.currentStep === "consent" && <Consent steps={steps} />}
          {this.state.currentStep === "sanctionsList" && (
            <SanctionList origin={this.state.origin} steps={steps} />
          )}
          {this.state.currentStep === "foreign" && <Foreign steps={steps} />}
          {this.state.currentStep === "confirmation" && <Confirmation />}
        </div>
      </ThemeProxyProvider>
    )
  }
}

export default App
