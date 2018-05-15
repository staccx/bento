import { css } from "styled-components"
import { color, spacing, registerStyle } from "@staccx/theme"
import { BoxStyles } from "@staccx/base"

const tileStyle = css`
  background: ${color.white};
  box-shadow: rgba(0, 0, 75, 0.015) 0px 2px 2px,
    rgba(0, 0, 75, 0.015) 0px 4px 4px, rgba(0, 0, 75, 0.015) 0px 8px 8px,
    rgba(0, 0, 75, 0.015) 0px 16px 16px, rgba(0, 0, 75, 0.015) 0px 32px 32px,
    rgba(0, 0, 75, 0.015) 0px 64px 64px;
  border: 1px solid ${color.line};
  border-radius: 2px;
  -webkit-column-break-inside: avoid;
  break-inside: avoid;
  page-break-inside: avoid;
`

export const BoxStyling = registerStyle(
  {
    tile: css`
      ${tileStyle};
      padding: ${spacing.medium} 0;
    `,
    tileBox: css`
      ${tileStyle};
      padding: 0;
      margin-bottom: ${spacing.medium};
    `,
    paddingVertical: css`
      padding-top: ${spacing.medium};
      padding-bottom: ${spacing.medium};
    `
  },
  BoxStyles.BOX
)
