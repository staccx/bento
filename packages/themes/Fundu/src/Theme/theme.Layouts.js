import { css } from "styled-components"
import { Layout, theming } from "@staccx/base"

export const LayoutStyling = theming.createVariants(
  {
    endScreen: css`
      grid-template-columns: 1fr;
      grid-template-areas:
        "heading"
        "content"
        "button"
        "image";
      grid-auto-flow: column;
      text-align: center;

      @media only screen and (max-width: ${theming.wrapper.medium}) {
        grid-template-columns: ${theming.spacing.small} 1fr ${theming.spacing
            .small};
        grid-template-rows: auto auto auto auto;
        grid-column-gap: 0;
      }
    `,
    formElements: css``,
    columns: css`
      grid-auto-flow: column;
      justify-content: start;
    `
  },
  Layout.themeProps.container
)
