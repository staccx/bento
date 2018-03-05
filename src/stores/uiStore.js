import React from "react"
import { action, observable } from "mobx"
import Portfolio from "../components/Portfolio"
import Experience from "../Questions/Experience"
import Intro from "../pages/Intro"
import {clamp} from "@staccx/base"

class UIStore {
  @observable
  steps = [
    { name: "Start", component: Intro },
    { name: "Experience", component: Experience },
    { name: "Purpose", component: Experience },
    { name: "Risk", component: Experience },
    { name: "Theme", component: Experience },
    { name: "Investments", component: Experience },
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
