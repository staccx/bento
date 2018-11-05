import { css } from "styled-components"
import { Layout, theming } from "@staccx/base"

export const LayoutStyling = theming.createVariants(
  {
    formElements: css``,
    columns: css`
      grid-auto-flow: column;
      justify-content: start;
    `,
    center: css`
      text-align: center;
    `,
    calculator: css`
      grid-column-gap: ${theming.spacing.large};
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "left right"
        "button button"
        "footer footer";
      grid-auto-flow: column;
      @media screen and (max-width: 650px) {
        grid-template-columns: 1fr;
        grid-template-areas:
          "left"
          "right"
          "button"
          "footer";
      }
    `
  },
  Layout.themeProps.container
)
