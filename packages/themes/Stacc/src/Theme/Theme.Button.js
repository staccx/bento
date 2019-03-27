import { css } from "styled-components"
import { Button, theming } from "@staccx/base"

export default theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      background-color: ${theming.color.secondary};

      &:hover,
      &:focus {
        background-color: ${theming.color.secondary};
      }
    `,
    inverted: css`
      background-color: ${theming.color.white};
      color: ${theming.color("primaryDark")};

      &:hover,
      &:active,
      &:focus {
        background-color: ${theming.color.white};
        color: ${theming.color("text")};
      }
    `
  },
  Button.themeProps.button
)
