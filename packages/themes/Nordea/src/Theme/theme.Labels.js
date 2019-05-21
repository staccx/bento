import { css } from "styled-components"
import { Label, theming } from "@staccx/base"

export const LabelStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css``,
    button: css`
      background-color: ${theming.color.primary};
      border-width: 0;
      border-radius: ${theming.borderRadius};
      padding: ${theming.spacing.tiny} ${theming.spacing.medium};
      cursor: pointer;
      min-height: ${theming.targetSize.normal};
      text-decoration: none;
      text-align: center;
      display: inline-block;
      font-size: ${theming.font.base};
      font-family: ${theming.fontFamily.body};
      line-height: 32px;
      font-weight: ${theming.fontWeight.bold};
      white-space: nowrap;
      justify-content: center;
      align-items: center;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      transition: background 0.2s ease;
      border-radius: ${theming.targetSize.normal};
      background-color: ${theming.color.primary};
      &:hover,
      &:focus-within,
      &:active {
        background-color: ${theming.color("text")};
      }
      &:focus-within {
        outline: -webkit-focus-ring-color auto 5px;
      }
      color: ${theming.color.white};
      display: flex;
      min-height: 0;
      padding: 0 ${theming.spacing.small};
      font-weight: ${theming.fontWeight.normal};
      > span:not(:only-child) {
        padding-right: ${theming.spacing.tiny};
      }
    `
  },
  Label.themeProps.label
)
