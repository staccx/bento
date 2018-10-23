import { css } from "styled-components"
import { registerStyle } from "@staccx/theme"
import { Expand } from "@staccx/base"

export const ExpandStyling = registerStyle(
  {
    dashboardExpand: css`
      display: block;
      width: 100%;
      text-align: left;
    `
  },
  Expand.themeProps.button
)
