import { css } from "styled-components"
import { theming, Input } from "@staccx/base"

// Wrapper
export const InputWrapperStyling = theming.createVariants(
  {
    schemaInput: css``
  },
  Input.themeProps.wrapper
)

// LABEL
export const InputLabelStyling = theming.createVariants(
  {
    schemaInput: css`
      font-weight: ${theming.fontWeight("bold")};
    `
  },
  Input.themeProps.label
)

// INPUT
export const InputInputStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      box-sizing: border-box;
    `,
    schemaInput: css`
      box-sizing: border-box;
      border-radius: 3px;
      border-width: 2px;
      font-size: ${theming.font.input};
    `
  },
  Input.themeProps.input
)
