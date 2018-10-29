import { css } from "styled-components"
import { Divider, theming } from "@staccx/base"

export const DividerStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      background-color: ${theming.color("bg")};
    `
  },
  Divider.themeProps.rule
)
