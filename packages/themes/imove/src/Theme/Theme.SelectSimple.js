import { css } from "styled-components"
import { SelectSimple, theming } from "@staccx/base"

export const SelectWrapper = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      label {
        position: absolute;
        top: 14px;
        color: ${theming.color.primary};
      }
    `
  },
  SelectSimple.themeProps.wrapper
)

export const Select = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      border-radius: 0;
      border-width: 0 0 1px;
      border-color: ${theming.color.primary};
      padding-left: 80px;
      padding-right: 0;
      font-size: ${theming.font.base};
      :hover,
      :focus {
        border-bottom-width: 2px;
        border-bottom-color: ${theming.color.black};
        color: initial;
      }
    `
  },
  SelectSimple.themeProps.select
)
