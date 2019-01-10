import Stepper from "./components/StepIndicator"
import StepsContent from "./components/v2/StepsContent"
import Investments from "./Questions/Investments"
import Intro from "./pages/Intro"
import Start from "./components/v2/Start"
import Experience from "./components/v2/Experience"
import Portfolio from "./components/Portfolio"
import StepsProgress from "./components/v2/StepsProgress"
import Purpose from "./components/v2/Purpose"
import Risk from "./components/v2/Risk"
import Themes from "./components/v2/Themes"

const pages = {
  Experience,
  Investments,
  Purpose,
  Risk,
  Themes,
  Intro,
  Start,
  Portfolio
}

const components = {
  Stepper,
  StepsProgress,
  StepsContent
}

export { pages, components }
