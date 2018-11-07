import { css } from "styled-components"
import { Wrapper, theming } from "@staccx/base"

export const WrapperStyling = theming.createVariants(
  {
    formForm: css`
      max-width: ${theming.wrapper("form")};
    `,
    mediumForm: css`
      max-width: ${theming.wrapper.medium};
    `
  },
  Wrapper.themeProps.wrapper
)
