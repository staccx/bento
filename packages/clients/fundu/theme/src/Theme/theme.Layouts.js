import { css } from "styled-components"
import { color, spacing, wrapper, registerStyle } from "@staccx/theme"
import { LayoutStyles } from "@staccx/base"

export const LayoutStyling = registerStyle(
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

      @media only screen and (max-width: ${wrapper.medium}) {
        grid-template-columns: ${spacing.small} 1fr ${spacing.small};
        grid-template-rows: auto auto auto auto;
        grid-column-gap: 0;
      }
    `,
    formElements: css`
      ${p =>
        !p.inCalculator &&
        css`
          border-top: 1px solid ${color("line")(p)};
        `};
      grid-row-gap: 0;

      > * {
        position: relative;
      }

      ${p =>
        p.inCalculator !== "left" &&
        css`
          > *:not(:last-child) {
            border-bottom: 1px solid ${color.line};
          }
        `};
    `
  },
  LayoutStyles.LAYOUT
)
