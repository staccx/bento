import { css } from "styled-components"
import { color, font, spacing, registerStyle, fontFamily } from "@staccx/theme"
import { HeadingStyles } from "@staccx/base"

const centeredHeading = css`
  text-align: center;
  margin-bottom: ${spacing.medium};
  color: ${color.primary};
  font-size: ${font.huge};

  @media (max-width: 735px) {
    font-size: ${font.h1};
  }

  @media (max-height: 850px) {
    font-size: ${font.h2};
  }
`

export const HeadingStyling = registerStyle(
  {
    stepHeading: centeredHeading,
    endScreen: centeredHeading,
    boxHeading: css`
      font-family: ${fontFamily.body};
      font-size: ${font.base};
      font-weight: 300;
      margin-bottom: ${spacing.tiny};
    `,
    formSection: css`
      padding: ${spacing.small} 0 ${spacing.small} ${spacing.medium};
      font-size: ${font.h3};
      color: ${color.wcag};
    `
  },
  HeadingStyles.HEADING
)
