import { css } from "styled-components"
import { registerStyle } from "@staccx/theme"
import { DividerStyles } from "@staccx/base"

export const DividerStyling = registerStyle(
  {
    calculator: css`
      display: none;
    `
  },
  DividerStyles.DIVIDER
)
