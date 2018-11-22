import { css } from "styled-components"
import { Expand, theming } from "@staccx/base"

export const ExpandStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      cursor: pointer;
      color: ${theming.color.primary};
      font-size: ${theming.font.input};
      width: auto;
      padding-right: 20px;
      box-shadow: 0 0 0 0 ${theming.color.primary};
      &:hover,
      &:focus {
        color: ${theming.color.primary};
        border-bottom: 1px solid;
      }

      svg {
        fill: ${theming.color.primary};
      }
    `,
    dashboardExpand: css`
      background-color: red;
      display: block;
      width: 100%;
      text-align: left;
    `
  },
  Expand.themeProps.button
)
