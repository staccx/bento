import { css } from "styled-components"
import { Heading, theming, hideVisually } from "@staccx/base"

export default theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      color: ${theming.color("secondary")};

      ${p =>
        p.level === 1 &&
        css`
          @media (max-width: 735px) {
            font-size: ${theming.font.h2};
          }
        `};
    `,
    secondary: css`
      color: ${theming.color("primary")};
    `,
    blue: css`
      color: ${theming.color("darkBlue")};
    `,
    checkMarkBlockHeading: css`
      color: ${theming.color("darkBlue")};
      font-size: ${theming.font.h3};
      font-weight: ${theming.fontWeight.normal};
      font-family: ${theming.fontFamily.body};
      line-height: 1.2;
    `,
    preHeader: css`
      font-size: ${theming.font.base};
      line-height: 1;
      color: ${theming.color("secondary")};
    `,
    orderStatus: css`
      font-size: ${theming.font.base};
      color: ${theming.color("wcag")};
      text-align: center;
    `,
    hideVisually: css`
      ${hideVisually};
    `
  },
  Heading.themeProps.heading
)
