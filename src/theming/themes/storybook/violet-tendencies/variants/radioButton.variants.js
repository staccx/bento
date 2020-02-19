import { css } from "styled-components"
import RadioButton from "../../../../../components/Forms/RadioButton/RadioButton"
import createVariants from "../../../../utils/createVariants"
import { VARIANT_DEFAULT, color } from "../../../../index"

export const radioButtonVariants = createVariants(
  {
    [VARIANT_DEFAULT]: css`
      &::before {
        width: 26px;
        height: 26px;
        transition: border 0.2s ease;
      }
      &::after {
        width: 12px;
        height: 12px;
        top: 3px;
        left: 7px;
      }
    `
  },
  RadioButton.themeProps.label
)

export const radioButtonWrapperVariants = createVariants(
  {
    [VARIANT_DEFAULT]: css`
      &:hover,
      input:focus ~ {
        label {
          &::before {
            border-color: ${color.primary} !important;
          }
        }
      }
    `
  },
  RadioButton.themeProps.wrapper
)
