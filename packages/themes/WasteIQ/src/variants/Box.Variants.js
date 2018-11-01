import { css } from "styled-components"
import { Box, theming } from "@staccx/base"

export const BoxVariants = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      padding: ${theming.spacing.medium};
      border: 1px solid ${theming.color.line};
      box-shadow: -${theming.spacing("shadow")} ${theming.spacing("shadow")} 0 ${p => (p.color ? theming.color(p.color) : theming.color("greenLight"))};

      @media (min-width: ${theming.wrapper("medium")}) {
        padding: ${theming.spacing.large};
      }
    `,
    white: css`
      padding: ${theming.spacing.medium};
      background-color: ${theming.color("white")};

      @media (min-width: ${theming.wrapper("mediumSpacingLarge")}) {
        padding: ${theming.spacing.large};
        margin-left: -${theming.spacing.large};
        margin-right: -${theming.spacing.large};
      }
    `,
    footer: css`
      background-color: ${theming.color.primary};
      color: ${theming.color.white};
      margin-top: ${theming.spacing("grid")};
    `,
    story: css`
      position: relative;

      @media (max-width: ${theming.wrapper("medium")}) {
        padding-bottom: 25vh;
      }
    `
  },
  Box.themeProps.box
)
