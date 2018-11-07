import { css } from "styled-components"
import { Box, fontSmoothing, theming } from "@staccx/base"
import { BounceIn } from "@staccx/animations"

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
    dashboardBox: css``,
    accountBox: defaultBox,
    loanBox: defaultBox,
    adBox: css`
      padding: ${theming.spacing.medium};
      background-color: ${theming.color.primary};
      color: ${theming.color.white};
      border-radius: ${theming.borderRadius};
    `,
    contractBox: defaultBox,
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
    accountFilterHeader: css`
      display: flex;
      width: 100%;
      margin-left: 0;
      background-color: ${theming.color("accountFilter")};
      justify-content: space-between;
      color: ${theming.color.white};
      padding-top: ${theming.spacing.small};
      padding-bottom: ${theming.spacing.small};
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
      font-weight: ${theming.fontWeight.bold};
    `,
    accountFilterFooter: css`
      padding: ${theming.spacing.small} ${theming.spacing.medium};
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    profileAdress: css`
      background-color: #f0f0f0;
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
    accountInfoOuter: css`
      position: relative;
      opacity: 0;
      transform: translateY(-12px);
      z-index: 50;
      animation: 0.4s ${BounceIn} cubic-bezier(0.175, 0.885, 0.32, 1.275)
        forwards 1;
    `,
    expandedItem: css`
      background-color: ${theming.color("expandedItem")};
    `
  },
  Box.themeProps.box
)
