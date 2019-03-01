import { css } from "styled-components"
import { SelectSimple, theming } from "@staccx/base"

export const SelectWrapper = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      display: flex;
      border-bottom: 1px solid ${theming.color.primary};
      :focus-within,
      :hover {
        border-bottom: 2px solid ${theming.color.black};
      }
      label {
        :hover {
          pointer-events: ignore;
        }
        position: absolute;
        color: ${theming.color.primary};
        position: static;
        display: flex;
        padding-bottom: 0;
        line-height: 1.4;
        align-items: center;
        margin-right: 20px;
        flex-basis: 80px;
      }
    `
  },
  SelectSimple.themeProps.wrapper
)

export const Select = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      border-radius: 0;
      border: none;
      border-color: ${theming.color.primary};
      padding: 0;
      font-size: ${theming.font.base};
      :hover,
      :focus {
        color: initial;
      }
    `
  },
  SelectSimple.themeProps.select
)
