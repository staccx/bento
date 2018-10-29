import { css } from "styled-components"
import { Divider, theming } from "@staccx/base"

export const DividerStyling = theming.createVariants(
  {
    calculator: css`
      display: none;
    `
  },
  Divider.themeProps.rule
)
