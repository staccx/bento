import { css } from "styled-components"
import { registerStyle } from "@staccx/theme"
import { ExpandStyles } from "@staccx/base"

export const ExpandStyling = registerStyle(
  {
    dashboardExpand: css`
      display: block;
      width: 100%;
      text-align: left;
    `
  },
  ExpandStyles.EXPAND_BTN
)
