import { css } from "styled-components"
import { color, registerStyle } from "@staccx/theme"
import { BoxStyles, fontSmoothing } from "@staccx/base"

export const BoxStyling = registerStyle(
  {
    adBox: css`
      background: ${color.secondary};
      color: ${color.white};
      border-radius: 8px;
      ${fontSmoothing};
    `,
    accountBox: css`
      background: ${color.secondary};
      color: ${color.white};
      border-radius: 0;
      padding: 0;
      min-height: 25vh;
      display: flex;
      flex-direction: row;
      align-items: center;
      ${fontSmoothing};
    `,
    dashboardBox: css`
      background: ${color.bgGray};
      color: ${color.text};
      border-radius: 8px;
    `,
    headerContainer: css`
      background: ${color.secondary};
      padding: 0;
      border-radius: 0;
    `
  },
  BoxStyles.BOX
)
