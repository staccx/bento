import { css } from "styled-components"
import { Select, theming } from "@staccx/base"

export const SelectWrapperStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      button:first-child {
        height: 44px;
      }
    `,
    calculatorTerms: css`
      height: 44px;
      button:first-child {
        height: 44px;
      }
    `
  },
  Select.themeProps.selectWrapper
)
