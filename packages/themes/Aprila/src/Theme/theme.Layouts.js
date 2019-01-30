import { css } from "styled-components"
import { Layout, LayoutItem, theming } from "@staccx/base"
import { FadeIn } from "@staccx/animations"

const TwoUp = css`
  margin-top: ${theming.spacing.large};
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
  margin-top: ${theming.spacing.large};
  grid-template-columns:
    minmax(0px, 1fr)
    minmax(227px, 480px)
    minmax(0px, 1fr);
  grid-template-areas:
    ". header ."
    ". misc ."
    ". menu ."
    ". main ."
    ". ad .";
`

export const LayoutStyling = theming.createVariants(
  {
    bibMainLayout: css`
      min-height: 100vh;
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr auto;
      grid-row-gap: 0;
      grid-template-areas:
        "header"
        "main"
        "footer";
      grid-auto-flow: column;
    `,
    overview: css`
      ${TwoUp};
      grid-template-areas:
        "header header header"
        ". menu ."
        ". main ."
        ". ad .";
      @media (min-width: 715px) {
        grid-template-areas:
          "header header header header"
          ". menu menu ."
          ". main ad .";
      }
    `,
    profile: OneUp,
    accountDetail: TwoUp,
    accountStatement: OneUp,
    prices: OneUp,
    withdraw: OneUp,
    annualStatment: OneUp,
    profileEdit: OneUp,
    contractDocuments: OneUp,
    loggedOut: OneUp,
    endAccountConfirmation: css`
      ${OneUp};
      text-align: center;
      margin-top: ${theming.spacing.large};
    `,
    login: css`
      grid-template-areas:
        "bankId bankIdMobile"
        "iframe iframe";
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 0;
    `
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
    header: css`
      padding: ${theming.spacing.tiny} 0;
      display: grid;
      background-color: ${theming.color.primary};
      grid-template-columns: minmax(0px, 1fr) minmax(227px, 824px) minmax(
          0px,
          1fr
        );
      grid-template-areas: ". headerMenu .";
      grid-column-gap: 24px;
    `,
    headingOnboarding: css`
      padding: ${theming.spacing.tiny} 0;
      background-color: transparent;
      margin-left: ${theming.spacing.huge};
      margin-bottom: ${theming.spacing("medium")};
    `,
    minHeight: css`
      min-height: calc(100vh - 48px - 51px - 24px);
    `,
    marginR: css`
      margin-right: ${theming.spacing.tiny};
    `,
    centerText: css`
      text-align: center;
    `,
    colorPrimary: css`
      color: ${theming.color.primary};
    `,
    smallMargin: css`
      > p {
        margin: ${theming.spacing.small};
      }
    `
  },
  LayoutItem.themeProps.container
)
