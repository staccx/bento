import { css } from "styled-components"
import { spacing, registerStyle } from "@staccx/theme"
import { LayoutStyles } from "@staccx/base"

export const LayoutStyling = registerStyle(
  {
    documentationApiExample: css`
      grid-template-columns: 0.4fr 1fr;
      grid-column-gap: ${spacing.huge};

      @media only screen and (max-width: 1280px) {
        grid-template-columns: 1fr;
        grid-row-gap: ${spacing.medium};
        grid-column-gap: 0;
      }
    `
  },
  LayoutStyles.LAYOUT
)
