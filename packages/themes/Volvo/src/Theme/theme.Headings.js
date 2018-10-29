import { css } from "styled-components"
import { Heading, theming } from "@staccx/base"

export const HeadingStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      color: ${theming.color("primary")};
    `,
    caseHeading: css`
      color: ${theming.color("text")};
      font-weight: ${theming.fontWeight.normal};
      line-height: 1.2;
    `,
    subtle: css`
      color: ${theming.color.wcag};
      font-size: ${theming.font.h4};
      margin-bottom: ${theming.spacing.tiny};
    `,
    ContactName: css`
      color: ${theming.color.text};
      font-size: ${theming.font.input};
    `,
    caselist: css`
      font-size: ${theming.font.base};
      font-weight: ${p => (p.attention ? "bold" : "normal")};
    `,
    salesOverviewHeading: css`
      color: ${theming.color.white};
    `
  },
  Heading.themeProps.heading
)
