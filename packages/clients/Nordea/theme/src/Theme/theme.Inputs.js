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
      ${defaultStyling};
      padding-left: ${theming.spacing.large};
    `,
    chat: css`
      height: ${theming.spacing.large};
      border-color: transparent;
      padding-right: ${theming.spacing("largePlus")};
      ${fontSmoothing};
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
