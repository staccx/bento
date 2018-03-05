import {action, observable} from 'mobx'
import TestQuestion from "../components/TestQuestion";
import Portfolio from "../components/Portfolio";

class UIStore {

  @observable steps = [
    {name: "Start", component: TestQuestion},
    {name: "Experience", component: TestQuestion},
    {name: "Purpose", component: TestQuestion},
    {name: "Risk", component: TestQuestion},
    {name: "Theme", component: TestQuestion},
    {name: "Investments", component: TestQuestion},
    {name: "Portfolio", component: Portfolio}
  ]
  @observable selectedInstrument = 0
  @observable currentStep = 0
  @observable maxStep = 0


  @action setInstrument = (instrument) => this.selectedInstrument = instrument === this.selectedInstrument ? null : instrument

  @action setStep = (step) => {
    this.currentStep = step
    if (step > this.maxStep) {
      this.maxStep = step
    }
  }
}

export default UIStore