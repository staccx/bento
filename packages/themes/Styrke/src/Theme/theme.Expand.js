import { css } from "styled-components"
import { Expand, theming } from "@staccx/base"

export const ExpandStyling = theming.createVariants(
  {
    dashboardExpand: css`
      display: block;
      width: 100%;
      text-align: left;
    `
  },
  Expand.themeProps.button
)
