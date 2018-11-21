import { css } from "styled-components"
import { Layout, LayoutItem, theming } from "@staccx/base"
import { FadeIn } from "@staccx/animations"

const OneUp = css`
  grid-template-columns:
    minmax(0px, 1fr)
    minmax(227px, 400px)
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
    bibPage: OneUp,
    profile: OneUp,
    accountDetail: OneUp,
    accountStatement: OneUp,
    prices: OneUp,
    withdraw: OneUp,
    annualStatment: OneUp,
    profileEdit: OneUp,
    contractDocuments: OneUp,
    loggedOut: OneUp,
    downpayment: OneUp,
    due: OneUp,
    insurance: OneUp,
    invoice: OneUp,
    loanDetail: OneUp,
    loanStatement: OneUp
  },
  Layout.themeProps.container
)

export const LayoutItemStyling = theming.createVariants(
  {
    fadeIn: css`
      opacity: 0;
      animation: ${FadeIn} forwards ease-out 400ms 1;
      animation-delay: ${p => (p.delay ? p.delay : 0)}ms;
    `
  },
  LayoutItem.themeProps.container
)
