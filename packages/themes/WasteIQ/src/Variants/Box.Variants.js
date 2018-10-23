import { css } from "styled-components"
import { Box, theming } from "@staccx/base"

export const BoxVariants = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      border: 1px solid ${theming.color.line};
    `
  },
  Box.themeProps.box
)
