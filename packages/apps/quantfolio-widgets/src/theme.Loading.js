import { theming, Loading } from "@staccx/base"

export const LoadingVariants = [
  theming.createVariants(
    {
      finger: Loading
    },
    Loading.themeProps.component
  )
]
