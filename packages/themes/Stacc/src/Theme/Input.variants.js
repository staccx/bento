import { theming, Input, PhoneInput } from "@staccx/base"
import { css } from "styled-components"
export default [
  theming.createVariants(
    {
      [theming.VARIANT_DEFAULT]: css`
        border: 1px ${theming.color("inputLine")} solid;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.07);
        &:hover,
        &:focus,
        &:active {
          border-color: ${theming.color.secondary};
          background-color: ${theming.color.white};
        }
        &::-webkit-input-placeholder {
          /* WebKit browsers */
          color: ${theming.color("placeholder")};
        }
        &:-moz-placeholder {
          /* Mozilla Firefox 4 to 18 */
          color: ${theming.color("placeholder")};
        }
        &::-moz-placeholder {
          /* Mozilla Firefox 19+ */
          color: ${theming.color("placeholder")};
        }
        &:-ms-input-placeholder {
          /* Internet Explorer 10+ */
          color: ${theming.color("placeholder")};
        }
      `
    },
    Input.themeProps.input
  ),
  theming.createVariants(
    {
      cool: css``
    },
    PhoneInput.themeProps.input
  )
]
