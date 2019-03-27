import { css } from "styled-components"
import { Heading, theming } from "@staccx/base"

const getResponsiveSizeL = level => {
  switch (level) {
    case 1:
      return theming.font.h2

    case 2:
      return theming.font.h3

    case 3:
      return theming.font.h4

    default:
      return theming.font[level]
  }
}

const getResponsiveSizeM = level => {
  switch (level) {
    case 1:
      return theming.font.h2

    case 2:
      return theming.font.h3

    case 3:
      return theming.font.h4

    default:
      return theming.font[level]
  }
}

export const HeadingStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      color: ${theming.color("textDark")};
      @media only screen and (max-width: ${theming.wrapper.large}) {
        font-size: ${p => getResponsiveSizeL(p.level)};
      }

      @media only screen and (max-width: ${theming.wrapper.medium}) {
        font-size: ${p => getResponsiveSizeM(p.level)};
      }
    `,
    emphasized: css`
      color: ${theming.color("primaryWcag")};
      text-transform: uppercase;
      font-size: ${theming.font.base};
      letter-spacing: 0.5;
    `,
    hero: css`
      font-size: ${theming.font("huge")};
      font-weight: 700;
      color: ${theming.color.white};

      @media only screen and (max-width: ${theming.wrapper.large}) {
        font-size: ${theming.font.h2};
      }
    `,
    primary: css`
      color: ${theming.color.primary};
      margin-bottom: ${theming.spacing.small};
    `
  },
  Heading.themeProps.heading
)
