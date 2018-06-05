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

  ${p =>
    p.hasBG &&
    `
    @media (min-width: 450px) and (max-width: 2100px) {
      color: ${color.text};
    }
  `};
`

export const HeadingStyling = registerStyle(
  {
    large: centeredHeading,
    stepHeading: centeredHeading,
    endScreen: centeredHeading,
    subHeading: css`
      font-weight: 400;
      color: ${color.primary};
      line-height: 1.5;
      text-align: ${p => (p.alignLeft ? "left" : "center")};
    `,
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
