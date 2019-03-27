import { css } from "styled-components"
import { Alert, theming } from "@staccx/base"

export const AlertStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      background-color: ${theming.color("bgGray")};
    `
  },
  Alert.themeProps.alertInfo
)
