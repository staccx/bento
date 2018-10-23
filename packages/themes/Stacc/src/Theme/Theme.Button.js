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
    `
  },
  Button.themeProps.button
)
