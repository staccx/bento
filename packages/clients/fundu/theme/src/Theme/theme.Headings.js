import { css } from "styled-components"
import { color, font, spacing, registerStyle } from "@staccx/theme"
import { HeadingStyles } from "@staccx/base"
import { fontFamily } from "../../../../../internal/theme/index"

export const HeadingStyling = registerStyle(
  {
    centered: css`
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
    `,
    boxHeading: css`
      font-family: ${fontFamily.body};
      font-size: ${font.base};
      font-weight: 300;
      margin-bottom: ${spacing.tiny};
    `
  },
  HeadingStyles.HEADING
)
