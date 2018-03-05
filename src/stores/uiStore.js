import React from "react"
import { action, observable } from "mobx"
import Portfolio from "../components/Portfolio"
import Experience from "../Questions/Experience"
import Intro from "../pages/Intro"

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

  @action
  setInstrument = instrument =>
    (this.selectedInstrument =
      instrument === this.selectedInstrument ? null : instrument)

  @action
  setStep = step => {
    this.currentStep = step
    if (step > this.maxStep) {
      this.maxStep = step
    }
  }
}

export default UIStore
