import { css } from "styled-components"
import { Divider, theming } from "@staccx/base"

export const DividerStyling = theming.createVariants(
  {
    calculator: css`
      margin-bottom: ${theming.spacing.mediumPlus};
    `
  },
  Divider.themeProps.rule
)
