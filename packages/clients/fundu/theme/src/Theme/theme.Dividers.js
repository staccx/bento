import { css } from "styled-components"
import { registerStyle } from "@staccx/theme"
import { Divider } from "@staccx/base"

export const DividerStyling = registerStyle(
  {
    calculator: css`
      display: none;
    `
  },
  Divider.themeProps.rule
)
