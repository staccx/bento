import { css } from "styled-components"
import { Box, fontSmoothing, theming } from "@staccx/base"
const defaultBox = css`
  background: ${theming.color.white};
  box-shadow: 0px 16px 16px rgba(0, 0, 75, 0.002),
    0px 8px 8px rgba(0, 0, 75, 0.001), 0px 4px 7px rgba(0, 0, 75, 0.021),
    0px 2px 2px rgba(0, 0, 75, 0.021), 0px 32px 22px rgba(0, 0, 75, 0.021),
    0px 44px 64px rgba(0, 0, 75, 0.0101);
  border-radius: ${theming.borderRadius};
`

export default theming.createVariants(
  {
    dashboardBox: css`
      background-color: ${theming.color("bgGray")};
      border-radius: ${theming.borderRadius};
    `,
    menuBox: css``,
    accountBox: css`
      position: relative;
      max-width: 840px;
      margin: auto;
    `,
    loanBox: defaultBox,
    adBox: css`
      padding: ${theming.spacing.medium};
      background-color: ${theming.color.primary};
      color: ${theming.color.white};
      border-radius: ${theming.borderRadius};
    `,
    contractBox: css``,
    headerContainer: css`
      padding: ${theming.spacing.large} 0 0;
    `,
    modalLeft: css`
      background-color: ${theming.color.primary};
      color: ${theming.color.white};
      text-align: center;
    `,
    modalRight: css`
      background-color: ${theming.color.white};
      text-align: center;
    `,
    accountInfo: css`
      ${defaultBox};
      padding: ${theming.spacing.medium};
      ${fontSmoothing};
      position: relative;
      color: ${theming.color.white};
      background-color: ${theming.color.primary};
    `,
    accountFilter: css`
      ${defaultBox};
      padding: 0;
      ${fontSmoothing};
      position: relative;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      overflow: hidden;
    `,
    transactionHeader: css`
      display: flex;
      width: 100%;
      margin-left: 0;
      background-color: ${theming.color("transactionHeader")};
      justify-content: space-between;
      color: ${theming.color.white};
      padding: ${theming.spacing.small};
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
      font-weight: ${theming.fontWeight.bold};
    `,
    profileAdress: css`
      background-color: #f0f0f0;
      padding: ${theming.spacing.small};
    `,
    prices: css`
      ${defaultBox};
      padding-left: 0;
      padding-right: 0;
      color: ${theming.color.wcag};
    `,
    relative: css`
      padding: 0;
      position: relative;
    `,
    withdrawInputs: css`
      padding: 0;
      display: grid;
      grid-column-gap: ${theming.spacing.small};
      grid-row-gap: ${theming.spacing.small};
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    `,
    center: css`
      text-align: center;
    `,
    expandedItem: css`
      background-color: ${theming.color("expandedItem")};
    `,
    accountHeading: css`
      text-align: center;
    `,
    highlightBox: css`
      border: none;
      border-radius: 8px;
      padding: ${theming.spacing("mediumPlus")} ${theming.spacing.large};
      margin-left: -${theming.spacing.large};
      margin-right: -${theming.spacing.large};
      background: ${theming.color("subtleHover")};
    `,
    schemaContainer: css``
  },
  Box.themeProps.box
)
