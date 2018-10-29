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
      padding-top: ${theming.spacing.small};
      padding-bottom: ${theming.spacing.medium};
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
