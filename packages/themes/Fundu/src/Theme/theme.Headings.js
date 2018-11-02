import { css } from "styled-components"
import { Heading, theming } from "@staccx/base"

const centeredHeading = css`
  text-align: center;
  color: ${theming.color.primary};
  font-size: ${theming.font.huge};
  font-weight: ${theming.fontWeight.bold};

  @media (max-width: 735px) {
    font-size: ${theming.font.h1};
  }

  @media (max-height: 850px) {
    font-size: ${theming.font.h2};
  }

  ${p =>
    p.hasBG &&
    `
    @media (min-width: 450px) and (max-width: 2100px) {
      color: ${theming.color.text};
    }
  `};
`

export const HeadingStyling = theming.createVariants(
  {
    large: centeredHeading,
    stepHeading: centeredHeading,
    endScreen: centeredHeading,
    subHeading: css`
      font-weight: 400;
      color: ${theming.color.primary};
      line-height: 1.5;
      text-align: ${p => (p.alignLeft ? "left" : "center")};
    `,
    boxHeading: css`
      color: ${theming.color.primary};
      font-size: ${theming.font.h3};
      font-weight: ${theming.fontWeight.bold};
    `,
    formSection: css`
      font-size: ${theming.font.h3};
      color: ${theming.color.wcag};
    `,
    sectionHeading: css`
      font-size: ${theming.font.h1};
    `
  },
  Heading.themeProps.heading
)
