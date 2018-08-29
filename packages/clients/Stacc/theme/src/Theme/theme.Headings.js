import { css } from "styled-components"
import { registerStyle, color, font, spacing } from "@staccx/theme"
import { Heading } from "@staccx/base"

export const HeadingStyling = registerStyle(
  {
    emphasized: css`
      color: ${color.primary};
      text-transform: uppercase;
      font-size: ${font.base};
      letter-spacing: 0.5;
    `,
    hero: css`
      font-size: ${font("huge")};
    `,
    primary: css`
      color: ${color.primary};
      margin-bottom: ${spacing.small};
    `
  },
  Heading.themeProps.heading
)
