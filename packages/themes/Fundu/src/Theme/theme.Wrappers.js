import { css } from "styled-components"
import { Wrapper, theming } from "@staccx/base"

export const WrapperStyling = theming.createVariants(
  {
    offerTable: css`
      max-width: ${theming.wrapper("form")};
    `
  },
  Wrapper.themeProps.wrapper
)
