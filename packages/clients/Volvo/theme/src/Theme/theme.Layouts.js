import { css } from "styled-components"
import { registerStyle, spacing } from "@staccx/theme"
import { Layout, LayoutItem } from "@staccx/base"
import { FadeIn, BounceIn } from "@staccx/animations"

export const LayoutStyling = registerStyle(
  {
    case: css`
      grid-template-columns: 1fr 320px 130px 320px 1fr;
      grid-template-rows: repeat(7, auto);
      grid-row-gap: ${spacing.large};
      grid-column-gap: ${spacing.medium};
      @media only screen and (max-width: 880px) {
        grid-template-columns: 1fr 320px 48px 320px 1fr;
      }
      @media only screen and (max-width: 880px) {
        grid-template-columns: 1fr 320px 2fr 320px 1fr;
      }
      @media only screen and (max-width: 750px) {
        grid-template-columns: 24px auto 24px;
        grid-template-rows: auto;
        grid-column-gap: 0;
      }
    `
  },
  Layout.themeProps.container
)

const mobileColumn = css`
  @media only screen and (max-width: 750px) {
    grid-row: auto;
    grid-column: 2;
  }
`

export const LayoutItemStyling = registerStyle(
  {
    caseHeader: css`
      grid-column: 1 / span 5;
      grid-row: 1 / span 3;
      z-index: -1;
      @media only screen and (max-width: 750px) {
        grid-row: 1 / span 3;
        grid-column: 1 / span 3;
      }
    `,
    caseSummary: css`
      grid-column: 2 / span 1;
      grid-row: 2;
      opacity: 0;
      animation: ${FadeIn} forwards ease-out 400ms 1;
      @media only screen and (max-width: 750px) {
        grid-row: 2;
        grid-column: 2;
      }
    `,
    caseChat: css`
      grid-column: 4 / span 1;
      grid-row: 2 / span 3;
      opacity: 0;
      animation: ${FadeIn} forwards ease-out 400ms 1;
      animation-delay: 400ms;
      ${mobileColumn};
    `,
    caseDocumentation: css`
      grid-column: 2 / span 1;
      grid-row: 5;
      opacity: 0;
      animation: ${FadeIn} forwards ease-out 400ms 1;
      animation-delay: 500ms;
      ${mobileColumn};
    `,
    caseContact: css`
      grid-column: 4 / span 1;
      grid-row: 5;
      opacity: 0;
      animation: ${FadeIn} forwards ease-out 400ms 1;
      animation-delay: 600ms;
      ${mobileColumn};
    `,
    caseFinance: css`
      grid-column: 2 / span 1;
      grid-row: 6;
      opacity: 0;
      animation: ${FadeIn} forwards ease-out 400ms 1;
      animation-delay: 700ms;
      ${mobileColumn};
    `,
    caseObject: css`
      grid-column: 4 / span 1;
      grid-row: 6;
      opacity: 0;
      animation: ${FadeIn} forwards ease-out 400ms 1;
      animation-delay: 800ms;
      ${mobileColumn};
    `,
    fadeIn: css`
      opacity: 0;
      animation: ${FadeIn} forwards ease-out 400ms 1;
      animation-delay: ${p => (p.delay ? p.delay : 0)}ms;
    `,
    fadeUp: css`
      opacity: 0;
      transform: translateY(-12px);
      animation: ${BounceIn} forwards ease-out 400ms 1;
      animation-delay: ${p => (p.delay ? p.delay : 0)}ms;
    `
  },
  LayoutItem.themeProps.container
)
