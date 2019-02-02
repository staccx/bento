import { theming, Loading } from "@staccx/base"
import {
  AtomSpinner,
  BreedingRhombusSpinner,
  CirclesToRhombusesSpinner,
  FingerprintSpinner,
  PixelSpinner
} from "react-epic-spinners"

export default theming.createVariants(
  {
    atom: AtomSpinner,
    breeding: BreedingRhombusSpinner,
    circles: CirclesToRhombusesSpinner,
    finger: FingerprintSpinner,
    pixel: PixelSpinner
  },
  Loading.themeProps.component
)
