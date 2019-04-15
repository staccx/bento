import { css } from "styled-components"
import { Wrapper, theming } from "@staccx/base"

export const WrapperStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      @media (max-width: 720px) {
        padding-left: ${theming.spacing.small};
        padding-right: ${theming.spacing.small};
      }
    `
  },
  Wrapper.themeProps.wrapper
)
