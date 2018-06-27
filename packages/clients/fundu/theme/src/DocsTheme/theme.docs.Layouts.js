import { css } from "styled-components"
import { color, spacing, registerStyle } from "@staccx/theme"
import { LayoutStyles, fontSmoothing } from "@staccx/base"

export const LayoutStyling = registerStyle(
  {
    documentationApiExample: css`
      grid-template-columns: 40% 1fr;
      grid-column-gap: ${spacing.large};

      > * {
        padding: ${spacing.medium};

        &:last-child {
          background-color: ${color("codeBackground")};
          color: #f7f9fc;
          border-left: 1px solid ${color.line};
          ${fontSmoothing};
        }
      }

      @media only screen and (max-width: 1280px) {
        grid-template-columns: 1fr;
        grid-row-gap: ${spacing.medium};
        grid-column-gap: 0;
      }
    `
  },
  LayoutStyles.LAYOUT
)
