import { css } from "styled-components"
import {
  registerStyle,
  color,
  font,
  spacing,
  wrapper,
  VARIANT_DEFAULT
} from "@staccx/theme"
import { Heading } from "@staccx/base"

const getResponsiveSizeL = level => {
  switch (level) {
    case 1:
      return font.h2

    case 2:
      return font.h3

    case 3:
      return font.h4

    default:
      return font[level]
  }
}

const getResponsiveSizeM = level => {
  switch (level) {
    case 1:
      return font.h2

    case 2:
      return font.h3

    case 3:
      return font.h4

    default:
      return font[level]
  }
}

export const HeadingStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      color: ${color("textDark")};
      @media only screen and (max-width: ${wrapper.large}) {
        font-size: ${p => getResponsiveSizeL(p.level)};
      }

      @media only screen and (max-width: ${wrapper.medium}) {
        font-size: ${p => getResponsiveSizeM(p.level)};
      }
    `,
    emphasized: css`
      color: ${color.primary};
      text-transform: uppercase;
      font-size: ${font.base};
      letter-spacing: 0.5;
    `,
    hero: css`
      font-size: ${font("huge")};
      font-weight: 700;
      color: ${color.white};
      text-align: center;

      @media only screen and (max-width: ${wrapper.large}) {
        font-size: ${font.h2};
      }
    `,
    primary: css`
      color: ${color.primary};
      margin-bottom: ${spacing.small};
    `
  },
  Heading.themeProps.heading
)
