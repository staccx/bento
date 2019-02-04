import Stepper from "./components/StepIndicator"
import StepsContent from "./components/v2/StepsContent"
import Investments from "./Questions/Investments"
import Intro from "./pages/Intro"
import Start from "./components/v2/Start"
import Experience from "./components/v2/Experience"
import StepsProgress from "./components/v2/StepsProgress"
import Purpose from "./components/v2/Purpose"
import Risk from "./components/v2/Risk"
import Themes from "./components/v2/Themes"
import Summary from "./components/v2/Summary"
import SavingsAdvisor from "./App"

const pages = {
  Experience,
  Investments,
  Purpose,
  Risk,
  Themes,
  Intro,
  Start,
  Summary
}

const components = {
  Stepper,
  StepsProgress,
  StepsContent
}

export { pages, components, SavingsAdvisor }
