import { css } from "styled-components"
import { Alert, theming } from "@staccx/base"

export default theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      background-color: ${theming.color("subtleHover")};
    `
  },
  Alert.themeProps.alertInfo
)
