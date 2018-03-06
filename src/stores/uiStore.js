import React from "react"
import { action, observable } from "mobx"
import Portfolio from "../components/Portfolio"
import Experience from "../Questions/Experience"
import Purpose from "../Questions/Purpose"
import Risk from "../Questions/Risk"
import Theme from "../Questions/Theme"
import Investments from "../Questions/Investments"
import Intro from "../pages/Intro"
import {clamp} from "@staccx/base"

class UIStore {
  @observable
  steps = [
    { name: "Start", component: Intro },
    { name: "Experience", component: Experience },
    { name: "Purpose", component: Purpose },
    { name: "Risk", component: Risk },
    { name: "Theme", component: Theme },
    { name: "Investments", component: Investments },
    { name: "Portfolio", component: Portfolio }
  ]
  @observable selectedInstrument = 0
  @observable currentStep = 0
  @observable maxStep = 0

  @observable depositStart = 0
  @observable depositMonthly = 2000


  @action setInstrument = (instrument) => this.selectedInstrument = instrument === this.selectedInstrument ? null : instrument

  @action setStep = (step) => {
    this.currentStep = step
    if (step > this.maxStep) {
      this.maxStep = step
    }
  }

  @action setDepositStart = (value) => {
    const clamped = clamp(0, 1000000, value)
    this.depositStart = clamped
  }
  @action setDepositMonthly = (value) => this.depositMonthly = clamp(0, 1000000, value)
}

export default UIStore
