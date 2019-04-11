import { css } from "styled-components"
import { Heading, theming } from "@staccx/base"

export const HeadingStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      color: ${theming.color("b4")};
    `,
    caseHeading: css`
      color: ${theming.color("b4")};
      font-weight: ${theming.fontWeight.normal};
      line-height: 1.2;
    `,
    subtle: css`
      color: ${theming.color.wcag};
      font-size: ${theming.font.tiny};
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
      color: ${theming.color("b4")};
    `,
    carConfiguratorHeading: css`
      color: ${theming.color("b4")};
      font-size: ${theming.font.h3};
      font-weight: ${theming.fontWeight.normal};
    `,
    carConfiguratorBrand: css`
      color: ${theming.color("b4")};
      font-size: ${theming.font.h1};
      font-weight: ${theming.fontWeight.normal};
    `,
    newsList: css`
      font-size: ${theming.font.base};
      color: ${theming.color.text};
      font-weight: normal;
    `,
    contact: css`
      font-size: ${theming.font.h4};
      font-weight: normal;
      color: ${theming.color("b5")};
    `,
    hero: css`
      color: ${theming.color.white};
    `
  },
  Heading.themeProps.heading
)
