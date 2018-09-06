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
      color: ${color("b4")};
    `,
    caseHeading: css`
      color: ${color("b4")};
      font-weight: ${fontWeight.normal};
      line-height: 1.2;
    `,
    subtle: css`
      color: ${color.wcag};
      font-size: ${font.tiny};
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
      color: ${color("b4")};
    `,
    carConfiguratorHeading: css`
      color: ${color("b4")};
      font-size: ${font.h3};
      font-weight: ${fontWeight.normal};
    `,
    carConfiguratorBrand: css`
      color: ${color("b4")};
      font-size: ${font.h1};
      font-weight: ${fontWeight.normal};
    `
  },
  Heading.themeProps.heading
)
