import { css } from "styled-components"
import { Wrapper, theming } from "@staccx/base"

export default theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      @media only screen and (min-width: ${theming.wrapper.medium}) {
        max-width: calc(${theming.wrapper.large} + 17vw);
        padding-left: 8.5vw;
        padding-right: 8.5vw;
      }
    `,
    innerPadded: css`
      @media only screen and (min-width: ${theming.wrapper.medium}) {
        padding-left: 8.5vw !important;
        padding-right: 8.5vw !important;
      }
    `
  },
  Wrapper.themeProps.wrapper
)
