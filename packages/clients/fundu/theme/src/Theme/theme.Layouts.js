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
    formElements: css`
      ${p =>
        !p.inCalculator &&
        css`
          border-top: 1px solid ${theming.color("line")(p)};
        `};
      grid-row-gap: 0;

      > * {
        position: relative;
      }

      ${p =>
        p.inCalculator !== "left" &&
        css`
          > *:not(:last-child) {
            border-bottom: 1px solid ${theming.color.line};
          }
        `};
    `
  },
  Layout.themeProps.container
)
