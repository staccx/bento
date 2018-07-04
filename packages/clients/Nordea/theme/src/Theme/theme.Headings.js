import { css } from "styled-components"
import {
  registerStyle,
  VARIANT_DEFAULT,
  color,
  fontWeight,
  spacing,
  font
} from "@staccx/theme"
import { Heading } from "@staccx/base"

export const HeadingStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      color: ${color("b4")};
    `,
    caseHeading: css`
      color: ${color("b4")};
      font-weight: ${fontWeight.normal};
      line-height: 1.2;
      margin-top: ${spacing.small};
      margin-bottom: ${spacing.small};
    `,
    subtle: css`
      color: ${color.wcag};
      font-size: ${font.tiny};
    `,
    ContactName: css`
      color: ${color.text};
      font-size: ${font.input};
    `
  },
  Heading.themeProps.heading
)
