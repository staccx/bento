import { css } from "styled-components"
import { color, registerStyle, spacing } from "@staccx/theme"
import { BoxStyles } from "@staccx/base"

export const BoxStyling = registerStyle(
  {
    adBox: css`
      background: ${color.secondary};
      color: ${color.white};
      border-radius: 8px;
      padding: ${spacing.medium};
    `,
    accountBox: css`
      background: ${color.secondary};
      color: ${color.white};
      border-radius: 0;
      padding: ${spacing.medium};
    `,
    dashboardBox: css`
      background: ${color.bgGray};
    `
  },
  BoxStyles.BOX
)
