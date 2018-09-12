import { css } from "styled-components"
import { color, registerStyle, spacing, fontWeight } from "@staccx/theme"
import { Box, fontSmoothing } from "@staccx/base"

const defaultBox = css`
  background: ${color.white};
  box-shadow: 0px 16px 16px rgba(0, 0, 75, 0.002),
    0px 8px 8px rgba(0, 0, 75, 0.001), 0px 4px 7px rgba(0, 0, 75, 0.021),
    0px 2px 2px rgba(0, 0, 75, 0.021), 0px 32px 22px rgba(0, 0, 75, 0.021),
    0px 44px 64px rgba(0, 0, 75, 0.0101);
  border-radius: 3px;
`

export default registerStyle(
  {
    dashboardBox: defaultBox,
    accountBox: defaultBox,
    adBox: defaultBox,
    headerContainer: css`
      padding: ${spacing.large} 0 0;
    `,
    modalLeft: css`
      background-color: ${color.primary};
      color: ${color.white};
      text-align: center;
    `,
    modalRight: css`
      background-color: ${color.white};
      text-align: center;
    `,
    accountInfo: css`
      ${defaultBox};
      padding: ${spacing.medium};
      ${fontSmoothing};
      position: relative;
    `,
    accountFilter: css`
      ${defaultBox};
      padding: ${spacing.medium};
      ${fontSmoothing};
      position: relative;
      padding-top: 52px;
      padding-bottom: ${spacing.small};
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    accountFilterHeader: css`
      display: flex;
      width: 100%;
      margin-left: -${spacing.medium};
      background-color: ${color("accountFilter")};
      position: absolute;
      justify-content: space-between;
      color: ${color.white};
      top: 0;
      padding-top: ${spacing.small};
      padding-bottom: ${spacing.small};
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
      font-weight: ${fontWeight.bold};
    `
  },
  Box.themeProps.box
)
