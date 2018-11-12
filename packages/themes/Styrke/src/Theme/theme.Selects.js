import { css } from "styled-components"
import { Select, theming } from "@staccx/base"

export const SelectStyling = theming.createVariants(
  {
    calculatorTerms: css`
      height: 44px;
      button:first-child {
        height: 44px;
      }
    `
  },
  Select.themeProps.selectWrapper
)
