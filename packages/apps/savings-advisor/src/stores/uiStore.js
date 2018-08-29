import { action, observable } from "mobx"
import sanityClient from "@sanity/client"
import Portfolio from "../components/Portfolio"
import Experience from "../Questions/Experience"
import Purpose from "../Questions/Purpose"
import Risk from "../Questions/Risk"
import Investments from "../Questions/Investments"
import Intro from "../pages/Intro"
import urlFor from "../utils/urlFor"

export const client = sanityClient({
  projectId: "cnvoktll",
  dataset: "production",
  useCdn: true // `false` if you want to ensure fresh data
})

class UIStore {
  @observable
  steps = [
    { name: "Start", component: Intro, validator: () => true },
    {
      name: "Experience",
      component: Experience,
      validator: () => this.hasExperience !== undefined
    },
    {
      name: "Purpose",
      component: Purpose,
      validator: () => this.apiStore.horizon !== null
    },
    {
      name: "Risk",
      component: Risk,
      validator: () => this.apiStore.currentRisk !== null
    },
    { name: "Theme", component: Investments, validator: () => true },
    { name: "Portfolio", component: Portfolio }
  ]
  @observable
  selectedInstrument = null

  @observable
  hasExperience = false

  @observable
  currentStep = 0
  @observable
  maxStep = 0
  @observable
  filterExpanded = false

  @observable
  cmsContent = null

  @observable
  cmsStart = null
  @observable
  cmsExperience = null
  @observable
  cmsPurpose = null
  @observable
  cmsRisk = null
  @observable
  cmsTheme = null
  @observable
  cmsSummary = null

  @observable
  settings = null

  @observable
  locale = "en"

  @action
  setFilterExpanded = isExpanded => (this.filterExpanded = isExpanded)

  @action
  setInstrument = instrument =>
    (this.selectedInstrument =
      instrument === this.selectedInstrument ? null : instrument)

  @action
  toggleExperience = () => (this.hasExperience = !this.hasExperience)

  @action
  setStep = step => {
    this.currentStep = step
    if (step > this.maxStep) {
      this.maxStep = step
    }
  }

  @action
  translate = text => (text ? text[this.locale] : null)
  @action
  getImage = img => urlFor(client, img)

  constructor() {
    this.apiStore = null
  }

  setApiStore = apiStore => (this.apiStore = apiStore)

  initialize = () => {
    return client
      .getDocument("995a39b9-7846-4ece-94b7-788714630cc0")
      .then(content => {
        this.cmsContent = content
        this.cmsStart = content.start
        this.cmsExperience = content.experience
        this.cmsPurpose = content.purpose
        this.cmsRisk = content.risk
        this.cmsTheme = content.theme
        this.cmsSummary = content.summary
        this.settings = {
          ...content.settings,
          nextButtonLabel: content.nextButtonLabel,
          backButtonLabel: content.backButtonLabel
        }
        return this.settings
      })
  }
}

export default UIStore
