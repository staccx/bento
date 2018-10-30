import { css } from "styled-components"
import { Box, theming } from "@staccx/base"

export const BoxVariants = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      padding: ${theming.spacing.medium};
      border: 1px solid ${theming.color.line};
      box-shadow: -${theming.spacing("shadow")} ${theming.spacing("shadow")} 0 ${p => (p.color ? theming.color(p.color) : theming.color("greenLight"))};
    `,
    white: css`
      padding: ${theming.spacing.medium};
      background-color: ${theming.color("white")};
    `
  },
  Box.themeProps.box
)
