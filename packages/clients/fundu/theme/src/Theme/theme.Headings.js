import { css } from "styled-components"
import { color, font, spacing, registerStyle } from "@staccx/theme"
import { HeadingStyles } from "@staccx/base"

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
    tileHeading: css`
      padding: 0 ${spacing.medium} ${spacing.small};
      font-size: ${font.h4};
      font-weight: 300;
      color: ${color.blue};
    `,
    stepHeading: css`
      font-size: ${font.h2};
      font-weight: 300;
      margin-bottom: ${spacing.small};
    `
  },
  HeadingStyles.HEADING
)
