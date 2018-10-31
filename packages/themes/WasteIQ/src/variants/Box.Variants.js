import { css } from "styled-components"
import { Box, theming } from "@staccx/base"

export const BoxVariants = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      padding: ${theming.spacing.large};
      border: 1px solid ${theming.color.line};
      box-shadow: -${theming.spacing("shadow")} ${theming.spacing("shadow")} 0 ${p => (p.color ? theming.color(p.color) : theming.color("greenLight"))};
    `,
    white: css`
      padding: ${theming.spacing.large};
      background-color: ${theming.color("white")};

      @media (min-width: ${theming.wrapper("mediumSpacingLarge")}) {
        margin-left: -${theming.spacing.large};
        margin-right: -${theming.spacing.large};
      }
    `,
    footer: css`
      background-color: ${theming.color.primary};
      color: ${theming.color.white};
      margin-top: ${theming.spacing("grid")};
    `
  },
  Box.themeProps.box
)
