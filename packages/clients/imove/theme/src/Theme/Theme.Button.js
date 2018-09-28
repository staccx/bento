import { css } from "styled-components"
import { registerStyle, VARIANT_DEFAULT, color } from "@staccx/theme"
import { Button } from "@staccx/base"

export default registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      background-color: ${color.primary};
      color: ${color.white};
      border-radius: 0;
    `,
    secondary: css`
      background-color: transparent;
      color: ${color.primary};
      border-radius: 0;
      &:hover,
      &:focus,
      &:active {
        background-color: transparent;
        color: ${color.primary};
        text-decoration: underline;
      }
    `
  },
  Button.themeProps.button
)
