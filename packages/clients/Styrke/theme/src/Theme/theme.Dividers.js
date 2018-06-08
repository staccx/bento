import { css } from "styled-components"
import { spacing, registerStyle } from "@staccx/theme"
import { DividerStyles } from "@staccx/base"

export const DividerStyling = registerStyle(
  {
    calculator: css`
      margin-bottom: ${spacing.mediumPlus};
    `
  },
  DividerStyles.DIVIDER
)
