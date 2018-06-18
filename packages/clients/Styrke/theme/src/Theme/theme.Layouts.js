import { css } from "styled-components"
import { spacing, wrapper, registerStyle } from "@staccx/theme"
import { LayoutStyles, LayoutItemStyles } from "@staccx/base"

export const LayoutStyling = registerStyle(
  {
    endScreen: css`
      grid-template-columns: 1fr;
      grid-template-areas:
        "image"
        "heading"
        "content"
        "button";
      grid-auto-flow: column;

      @media only screen and (max-width: ${wrapper.medium}) {
        grid-template-columns: ${spacing.small} 1fr ${spacing.small};
        grid-template-rows: auto auto auto auto;
        grid-column-gap: 0;
      }
    `,
    formElements: css`
      padding-top: ${spacing.small};
      padding-bottom: ${spacing.medium};
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    `
  },
  LayoutStyles.LAYOUT
)

export const LayoutItemStyling = registerStyle(
  {
    legaleseContainer: css`
      grid-column: 1/3;
    `
  },
  LayoutItemStyles.LAYOUT_ITEM
)
