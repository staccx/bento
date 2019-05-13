import { css } from "styled-components"
import { Heading, theming } from "@staccx/base"

export const HeadingStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      color: ${theming.color("b4")};
    `,
    chartAmount: css`
      font-weight: ${theming.fontWeight.normal};
      font-size: ${theming.font.h3};
      margin-bottom: ${theming.spacing.medium};
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
    layoutBox: css`
      font-size: ${p => (p.smallHeading ? theming.font.h5 : theming.font.h4)};
      font-weight: ${theming.fontWeight.normal};
      color: ${theming.color("g3")};
      line-height: 1.3;
      margin-bottom: 0;

      @media (min-width: 720px) {
        font-size: ${p =>
          p.smallHeading ? theming.font.input : theming.font.h2};
        line-height: 1;
        margin-top: -6px;
      }

      /* Small-screen Dissolve */
      @media (max-width: 489px) {
        color: ${p => p.smallScreenDissolve && theming.color.gray};
      }
    `,
    newsList: css`
      font-size: ${theming.font.base};
      color: currentColor;
      font-weight: normal;
    `,
    contact: css`
      font-size: ${theming.font.h4};
      font-weight: normal;
      color: ${theming.color("b5")};
    `,
    hero: css`
      color: ${theming.color.white};
    `,
    notifications: css`
      font-size: ${theming.font.h4};
      font-weight: ${theming.fontWeight.normal};
      color: ${theming.color("g3")};
      line-height: 1.3;
      margin-bottom: 0;
    `,
    notificationName: css`
      color: ${theming.color("b4")};
      font-size: ${theming.font.h6};
    `
  },
  Heading.themeProps.heading
)
