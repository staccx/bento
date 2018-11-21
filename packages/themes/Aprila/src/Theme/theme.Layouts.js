import { css } from "styled-components"
import { Layout, LayoutItem, theming } from "@staccx/base"
import { FadeIn } from "@staccx/animations"

const TwoUp = css`
  grid-template-columns:
    minmax(0px, 1fr)
    minmax(227px, 480px)
    minmax(0px, 1fr);
  grid-template-areas: ". header ." ". menu ." ". main ." ". ad .";
  @media (min-width: 715px) {
    grid-template-columns:
      minmax(0, 1fr) minmax(320px, 400px)
      minmax(320px, 400px)
      minmax(0, 1fr);

    grid-template-areas: ". header header ." ". menu menu ." ". main ad .";
  }
`

const OneUp = css`
  grid-template-columns:
    minmax(0px, 1fr)
    minmax(227px, 480px)
    minmax(0px, 1fr);
  grid-template-areas: ". header ." ". menu ." ". main ." ". ad .";
`

export const LayoutStyling = theming.createVariants(
  {
    bibMainLayout: css`
      min-height: 100vh;
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "logo"
        "main"
        "footer";
      grid-auto-flow: column;
    `,
    bibPage: TwoUp,
    profile: OneUp,
    accountDetail: TwoUp,
    accountStatement: OneUp,
    prices: OneUp,
    withdraw: OneUp,
    annualStatment: OneUp,
    profileEdit: OneUp,
    contractDocuments: OneUp,
    loggedOut: OneUp
  },
  Layout.themeProps.container
)

export const LayoutItemStyling = theming.createVariants(
  {
    fadeIn: css`
      opacity: 0;
      animation: ${FadeIn} forwards ease-out 400ms 1;
      animation-delay: ${p => (p.delay ? p.delay : 0)}ms;
      background-color: ${p => p.area === "logo" && theming.color("primary")};
    `,
    logo: css`
      background-color: ${theming.color.primary};
    `,
    minHeight: css`
      min-height: calc(100vh - 48px - 51px - 24px);
    `
  },
  LayoutItem.themeProps.container
)
