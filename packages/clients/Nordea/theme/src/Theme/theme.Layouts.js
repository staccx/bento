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
    `
  },
  Layout.themeProps.container
)

export const LayoutItemStyling = registerStyle(
  {
    caseHeader: css`
      grid-column: 1 / span 5;
      grid-row: 1 / span 3;
      z-index: -1;
    `,
    caseSummary: css`
      grid-column: 2 / span 1;
      grid-row: 2;
      opacity: 0;
      animation: ${FadeIn} forwards ease-out 400ms 1;
    `,
    caseChat: css`
      grid-column: 4 / span 1;
      grid-row: 2 / span 3;
      opacity: 0;
      animation: ${FadeIn} forwards ease-out 400ms 1;
      animation-delay: 400ms;
    `,
    caseDocumentation: css`
      grid-column: 2 / span 1;
      grid-row: 5;
      opacity: 0;
      animation: ${FadeIn} forwards ease-out 400ms 1;
      animation-delay: 500ms;
    `,
    caseContact: css`
      grid-column: 4 / span 1;
      grid-row: 5;
      opacity: 0;
      animation: ${FadeIn} forwards ease-out 400ms 1;
      animation-delay: 600ms;
    `,
    caseFinance: css`
      grid-column: 2 / span 1;
      grid-row: 6;
      opacity: 0;
      animation: ${FadeIn} forwards ease-out 400ms 1;
      animation-delay: 700ms;
    `,
    caseObject: css`
      grid-column: 4 / span 1;
      grid-row: 6;
      opacity: 0;
      animation: ${FadeIn} forwards ease-out 400ms 1;
      animation-delay: 800ms;
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
