import { css } from "styled-components"
import { Box, theming } from "@staccx/base"

export const BoxVariants = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      border: 1px solid ${theming.color.line};
      box-shadow: -${theming.spacing("shadow")} ${theming.spacing("shadow")} 0 ${p => (p.color ? theming.color(p.color) : theming.color("greenLight"))};
    `
  },
  Box.themeProps.box
)
