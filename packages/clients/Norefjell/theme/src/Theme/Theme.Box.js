import { css } from "styled-components"
import { color, registerStyle, spacing } from "@staccx/theme"
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
      margin: ${spacing.medium} -${spacing.medium} -${spacing.medium};
      padding: ${spacing.medium};
      border-radius: 3px;
      background-color: ${color.primary};
      color: ${color.white};
      z-index: 50;
      ${fontSmoothing};
    `
  },
  Box.themeProps.box
)
