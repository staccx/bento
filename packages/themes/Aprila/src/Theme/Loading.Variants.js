import { theming, Loading } from "@staccx/base"
import {
  AtomSpinner,
  BreedingRhombusSpinner,
  CirclesToRhombusesSpinner,
  FingerprintSpinner
} from "react-epic-spinners"
import { ClimbingBoxLoader } from "react-spinners"

export default theming.createVariants(
  {
    atom: AtomSpinner,
    breeding: BreedingRhombusSpinner,
    circles: CirclesToRhombusesSpinner,
    finger: FingerprintSpinner,
    climbing: ClimbingBoxLoader
  },
  Loading.themeProps.component
)
