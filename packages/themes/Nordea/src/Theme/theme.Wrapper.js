import { css } from "styled-components"
import { Wrapper, theming } from "@staccx/base"

export const WrapperStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      @media (max-width: 720px) {
        padding-left: ${theming.spacing.small};
        padding-right: ${theming.spacing.small};
      }
    `,
    customer: css`
      /* Compensate for the layout dashboard variant css grid. */
      /* TODO: Consider wrapping both in similar wrappers */
      max-width: calc(1108px + ${theming.spacing.large} * 2);
      padding-left: ${theming.spacing.large};
      padding-right: ${theming.spacing.large};
      /* / */
      @media (max-width: 980px) {
        padding-left: ${theming.spacing.small};
        padding-right: ${theming.spacing.small};
      }
    `
  },
  Wrapper.themeProps.wrapper
)
