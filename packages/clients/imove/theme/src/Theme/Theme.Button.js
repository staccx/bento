import { css } from "styled-components"
import { registerStyle, VARIANT_DEFAULT, color } from "@staccx/theme"
import { Button } from "@staccx/base"

export default registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      background-color: ${color.secondary};

      &:hover,
      &:focus {
        background-color: ${color.secondary};
      }
    `
  },
  Button.themeProps.button
)
