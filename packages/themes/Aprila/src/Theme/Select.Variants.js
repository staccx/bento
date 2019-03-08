import { theming, Select } from "@staccx/base"
import { css } from "styled-components"

export default [
  theming.createVariants(
    {
      [theming.VARIANT_DEFAULT]: css`
        font-family: "Roboto", sans-serif;
        //position: relative;
      `
    },
    Select.themeProps.defaultOptionWrapper
  ),
  theming.createVariants(
    {
      [theming.VARIANT_DEFAULT]: css`
        background-color: ${theming.white};
      `
    },
    Select.themeProps.listItem
  ),
  theming.createVariants(
    {
      schemaInputPhone: css`
        border-width: 2px;
        min-height: 44px;
      `
    },
    Select.themeProps.selectedWrapper
  ),
  theming.createVariants(
    {
      schemaInputPhone: css`
        padding: 10px 12px 10px 12px;
        min-height: auto;
      `
    },
    Select.themeProps.optionContainer
  )
]
