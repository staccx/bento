import { css } from "styled-components"

import { FileInput, Input, theming } from "@staccx/base"

const defaultStyling = css`
  border-width: 1px;
  border-color: ${theming.color.line};
  ${theming.fontSmoothing};
  &:hover,
  &:focus,
  &:active {
    border-color: ${theming.color("black")};
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
      padding-right: ${theming.spacing("largePlus")};
      ${theming.fontSmoothing};
      &:hover,
      &:focus,
      &:active {
        border-color: ${theming.color("primary")};
        background-color: ${theming.color.white};
      }
    `
  },
  Input.themeProps.input
)

export const InputWrapperStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      flex-grow: 1;
    `,
    chat: css`
      margin-left: -1px;
      margin-right: -1px;
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
