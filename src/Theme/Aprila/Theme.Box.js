import { css } from "styled-components"
import { color, registerStyle, spacing } from "@staccx/theme"
import { BoxStyles } from "@staccx/base"

export const BoxStyling = registerStyle(
  {
    adBox: css`
      background: ${color.secondary};
      color: ${color.white};
      border-radius: 8px;
    `,
    accountBox: css`
      background: ${color.secondary};
      color: ${color.white};
      border-radius: 0;
      padding: ${spacing.medium};
      min-height: 25vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    `,
    dashboardBox: css`
      background: ${color.bgGray};
      border-radius: 8px;
    `
  },
  BoxStyles.BOX
)
