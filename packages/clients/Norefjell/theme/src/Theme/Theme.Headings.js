import { registerStyle, color, font, fontWeight } from "@staccx/theme"
import { css } from "styled-components"
import { Heading } from "@staccx/base"

export default registerStyle(
  {
    accountHeading: css`
      font-size: ${font.input};
      font-weight: ${fontWeight.bold};
      color: ${color("accountHeading")};
    `
  },
  Heading.themeProps.heading
)
