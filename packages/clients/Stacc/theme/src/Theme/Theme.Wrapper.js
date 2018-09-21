import { css } from "styled-components"
import { wrapper, registerStyle, VARIANT_DEFAULT } from "@staccx/theme"
import { Wrapper } from "@staccx/base"

export default registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      @media only screen and (min-width: ${wrapper.medium}) {
        max-width: calc(${wrapper.large} + 17vw);
        padding-left: 8.5vw;
        padding-right: 8.5vw;
      }
    `
  },
  Wrapper.themeProps.wrapper
)
