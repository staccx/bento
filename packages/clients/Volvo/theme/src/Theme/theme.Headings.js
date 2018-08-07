import { css } from "styled-components"
import {
  registerStyle,
  VARIANT_DEFAULT,
  color,
  fontWeight,
  font,
  spacing
} from "@staccx/theme"
import { Heading } from "@staccx/base"

export const HeadingStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      color: ${color("primary")};
    `,
    caseHeading: css`
      color: ${color("text")};
      font-weight: ${fontWeight.normal};
      line-height: 1.2;
    `,
    subtle: css`
      color: ${color.wcag};
      font-size: ${font.h4};
      margin-bottom: ${spacing.tiny};
    `,
    ContactName: css`
      color: ${color.text};
      font-size: ${font.input};
    `,
    caselist: css`
      font-size: ${font.base};
      font-weight: ${p => (p.attention ? "bold" : "normal")};
    `,
    salesOverviewHeading: css`
      color: ${color.white};
    `
  },
  Heading.themeProps.heading
)
