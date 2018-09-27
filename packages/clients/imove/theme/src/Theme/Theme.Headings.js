import {
  registerStyle,
  color,
  font,
  fontWeight,
  VARIANT_DEFAULT
} from "@staccx/theme"
import { css } from "styled-components"
import { Heading } from "@staccx/base"

export default registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      color: ${color("primary")};
    `,
    secondary: css`
      color: ${color("secondary")};
    `,
    checkMarkBlockHeading: css`
      color: ${color("darkBlue")};
      font-size: ${font.h3};
      font-weight: ${fontWeight.normal};
      line-height: 1.2;
    `
  },
  Heading.themeProps.heading
)
