import {
  registerStyle,
  color,
  font,
  fontWeight,
  VARIANT_DEFAULT,
  fontFamily
} from "@staccx/theme"
import { css } from "styled-components"
import { Heading } from "@staccx/base"

export default registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      color: ${color("secondary")};
    `,
    secondary: css`
      color: ${color("primary")};
    `,
    blue: css`
      color: ${color("darkBlue")};
    `,
    checkMarkBlockHeading: css`
      color: ${color("darkBlue")};
      font-size: ${font.h3};
      font-weight: ${fontWeight.normal};
      font-family: ${fontFamily.body};
      line-height: 1.2;
    `,
    preHeader: css`
      font-size: ${font.base};
      line-height: 1;
      color: ${color("secondary")};
    `,
    orderStatus: css`
      font-size: ${font.base};
      color: ${color("wcag")};
      text-align: center;
    `
  },
  Heading.themeProps.heading
)
