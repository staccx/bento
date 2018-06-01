import { css } from "styled-components"
import { color, font, spacing, registerStyle, fontFamily } from "@staccx/theme"
import { HeadingStyles } from "@staccx/base"

const stepHeading = css`
  margin-bottom: ${spacing.medium};
  color: ${color.primary};
  font-size: ${font.large};

  @media (max-width: 735px) {
    font-size: ${font.h1};
  }

  @media (max-height: 850px) {
    font-size: ${font.h2};
  }
`

export const HeadingStyling = registerStyle(
  {
    stepHeading: stepHeading,
    endScreen: stepHeading,
    boxHeading: css`
      font-family: ${fontFamily.body};
      font-size: ${font.base};
      font-weight: 300;
      margin-bottom: ${spacing.tiny};
    `
  },
  HeadingStyles.HEADING
)
