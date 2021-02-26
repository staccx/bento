import { css } from "styled-components"
import { Input } from "../../../../../components"
import createVariants from "../../../../../theming/utils/createVariants"
import { VARIANT_DEFAULT, color } from "../../../../index"

export const inputVariants = createVariants(
  {
    [VARIANT_DEFAULT]: css`
      transition: border 0.2s ease, box-shadow 0.2s ease;

      &:hover,
      &:focus {
        background-color: ${color.white};
      }
      &:hover {
        border-color: ${color.primary};
      }
      &:focus {
        box-shadow: 0 0 0 2px ${color.primary}, 0 0 0 6px ${color.primary}66;
      }

      &[disabled] {
        background-color: ${color("bgGray")};
        cursor: not-allowed;

        &:hover {
          border-color: ${color.line};
        }
      }

      &::-webkit-input-placeholder {
        /* WebKit browsers */
        color: ${color("placeholder")};
      }
      &:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: ${color("placeholder")};
      }
      &::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: ${color("placeholder")};
      }
      &:-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: ${color("placeholder")};
      }
    `
  },
  Input.themeProps.input
)
