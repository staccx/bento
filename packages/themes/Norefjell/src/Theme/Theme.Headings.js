import { css } from "styled-components"
import { Heading, theming } from "@staccx/base"

export default theming.createVariants(
  {
    accountHeading: css`
      font-size: ${theming.font.input};
      font-weight: ${theming.fontWeight.bold};
      color: ${theming.color("accountHeading")};
    `
  },
  Heading.themeProps.heading
)
