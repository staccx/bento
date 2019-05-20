import { css } from "styled-components"

import { FileInput, Input, fontSmoothing, theming } from "@staccx/base"

const defaultStyling = css`
  border-width: 2px;
  border-color: transparent;
  ${fontSmoothing};
  &:hover,
  &:focus,
  &:active {
    border-color: ${theming.color("b4")};
    background-color: ${theming.color.white};
  }
`

export const InputStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      ${defaultStyling};
    `,
    search: css`
      background-color: ${theming.color.subtleHover};
      border: 1px solid ${theming.color.subtleHover};
      border-radius: 50px;
      padding-left: ${theming.spacing.medium};
      padding-right: 66px;

      &:focus,
      &:hover,
      &:active {
        background-color: ${theming.color.white};
      }

      &::-webkit-input-placeholder {
        /* WebKit browsers */
        color: ${theming.color.wcag};
      }
      &:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: ${theming.color.wcag};
      }
      &::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: ${theming.color.wcag};
      }
      &:-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: ${theming.color.wcag};
      }
      &:-webkit-autofill {
        background-color: ${theming.color.subtleHover};
      }
    `,
    chat: css`
      height: ${theming.spacing.large};
      border-color: transparent;
    `
  },
  Input.themeProps.input
)

export const InputWrapperStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      flex-grow: 1;
    `
  },
  Input.themeProps.wrapper
)

export const FileInputLabelStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      border-radius: ${theming.targetSize.normal};
      padding: 0 ${theming.spacing.small};
      min-height: ${theming.spacing.medium};
      background-color: transparent;
      color: ${theming.color("b4")};
      &:hover,
      &:focus,
      &:active {
        color: ${theming.color("b4")};
        background-color: ${theming.color("bg")};
      }
    `
  },
  FileInput.themeProps.label
)
