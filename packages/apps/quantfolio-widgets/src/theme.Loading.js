import { theming, Loading } from "@staccx/base"
import { FingerprintSpinner } from "react-epic-spinners"

export const LoadingVariants = [
  theming.createVariants(
    {
      finger: FingerprintSpinner
    },
    Loading.themeProps.component
  )
]
