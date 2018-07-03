import { css } from "styled-components"
import { registerStyle, VARIANT_DEFAULT, color } from "@staccx/theme"
import { Alert } from "@staccx/base"

export default registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      background-color: ${color("subtleHover")};
    `
  },
  Alert.themeProps.alertInfo
)
