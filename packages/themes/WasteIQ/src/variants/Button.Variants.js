import { css } from "styled-components"
import { Button, theming } from "@staccx/base"

export const ButtonVariants = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      background-color: ${theming.color.white};
      border: 1px solid ${theming.color.primary};
      color: ${theming.color.primary};
      font-weight: normal;
      box-shadow: -${theming.spacing("shadow")} ${theming.spacing("shadow")} 0 ${p => (p.color ? theming.color(p.color) : theming.color("greenLight"))};
      transition: box-shadow 0.2s ease;
      white-space: normal;

      &:hover,
      &:focus,
      &:active {
        background-color: ${theming.color.white};
        border: 1px solid ${theming.color.primary};
        color: ${theming.color.primary};
        box-shadow: -${theming.spacing("shadowLarge")} ${theming.spacing(
            "shadowLarge"
          )} 0 ${p => (p.color ? theming.color(p.color) : theming.color("greenLight"))};
      }
    `
  },
  Button.themeProps.button
)
