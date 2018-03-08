import React from "react"
import { action, observable } from "mobx"
import Portfolio from "../components/Portfolio"
import Experience from "../Questions/Experience"
import Purpose from "../Questions/Purpose"
import Risk from "../Questions/Risk"
import Investments from "../Questions/Investments"
import Intro from "../pages/Intro"

class UIStore {
  @observable
  steps = [
    { name: "Start", component: Intro },
    { name: "Experience", component: Experience },
    { name: "Purpose", component: Purpose },
    { name: "Risk", component: Risk },
    { name: "Theme", component: Investments },
    { name: "Portfolio", component: Portfolio }
  ]
  @observable selectedInstrument = 0

  @observable hasExperience = false

  @observable currentStep = 0
  @observable maxStep = 0

  @action
  setInstrument = instrument =>
    (this.selectedInstrument =
      instrument === this.selectedInstrument ? null : instrument)

  @action toggleExperience = () => (this.hasExperience = !this.hasExperience)

  @action
  setStep = step => {
    this.currentStep = step
    if (step > this.maxStep) {
      this.maxStep = step
    }
  }
}

export default UIStore
