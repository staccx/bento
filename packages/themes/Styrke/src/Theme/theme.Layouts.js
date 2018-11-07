import { css } from "styled-components"
import { Layout, LayoutItem, theming } from "@staccx/base"

export const LayoutStyling = theming.createVariants(
  {
    endScreen: css`
      grid-template-columns: 1fr;
      grid-template-areas:
        "image"
        "heading"
        "content"
        "button";
      grid-auto-flow: column;

      @media only screen and (max-width: ${theming.wrapper.medium}) {
        grid-template-columns: ${theming.spacing.small} 1fr ${theming.spacing
            .small};
        grid-template-rows: auto auto auto auto;
        grid-column-gap: 0;
      }
    `,
    formElements: css`
      grid-template-columns: 1fr;

      @media only screen and (min-width: 730px) {
        grid-template-columns: 1fr 1fr;
        align-items: end;
      }
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

export const LayoutItemStyling = theming.createVariants(
  {
    legaleseContainer: css`
      grid-column: 1/3;
    `
  },
  LayoutItem.themeProps.container
)
