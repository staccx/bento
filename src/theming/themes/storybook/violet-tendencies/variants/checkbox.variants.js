import { css } from "styled-components"
import CheckBox from "../../../../../components/Forms/CheckBox/CheckBox"
import createVariants from "../../../../utils/createVariants"
import { VARIANT_DEFAULT } from "../../../../index"

export const checkBoxIconVariants = createVariants(
  {
    [VARIANT_DEFAULT]: css`
      left: 7px;
      top: 20px;
    `
  },
  CheckBox.themeProps.icon
)

export const checkBoxBoxVariants = createVariants(
  {
    [VARIANT_DEFAULT]: css`
      top: 14px;
    `
  },
  CheckBox.themeProps.labelBefore
)
