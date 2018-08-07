import { css } from "styled-components"
import {
  registerStyle,
  spacing,
  VARIANT_DEFAULT,
  color,
  targetSize
} from "@staccx/theme"
import { FileInput, Input, fontSmoothing } from "@staccx/base"

const defaultStyling = css`
  border-width: 2px;
  border-color: transparent;
  ${fontSmoothing};
  &:hover,
  &:focus,
  &:active {
    border-color: ${color("b4")};
    background-color: ${color.white};
  }
`

export const InputStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      ${defaultStyling};
    `,
    search: css`
      ${defaultStyling};
      padding-left: ${spacing.large};
    `,
    chat: css`
      height: ${spacing.large};
      border-color: transparent;
      padding-right: ${spacing("largePlus")};
      ${fontSmoothing};
    `
  },
  Input.themeProps.input
)

export const InputWrapperStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      flex-grow: 1;
    `
  },
  Input.themeProps.wrapper
)

export const FileInputLabelStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      border-radius: ${targetSize.normal};
      padding: 0 ${spacing.small};
      min-height: ${spacing.medium};
      background-color: transparent;
      color: ${color("b4")};
      &:hover,
      &:focus,
      &:active {
        color: ${color("b4")};
        background-color: ${color("bg")};
      }
    `
  },
  FileInput.themeProps.label
)
