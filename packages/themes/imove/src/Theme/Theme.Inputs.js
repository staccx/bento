import { css } from "styled-components"
import { spacing, registerStyle, color, VARIANT_DEFAULT } from "@staccx/theme"
import { Input, PostalCodeInput, Label } from "@staccx/base"

export const InputStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      display: block;
      border-top-width: 0;
      border-left-width: 0;
      border-right-width: 0;
      border-bottom-width: 1px;
      border-color: ${color.primary};
      border-radius: 0;
      transition: border-color 0.2s ease-out;
      padding-left: ${p => (p.labelWidth ? p.labelWidth + "px" : spacing.huge)};
      font-weight: 400;

      &:hover,
      &:focus,
      &:active {
        background-color: transparent;
        border-bottom-width: 2px;
        border-color: ${color("darkBlue")};
      }
    `
  },
  Input.themeProps.input
)

export const LabelInputStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      position: absolute;
      left: 0;
      bottom: 0;
      padding-bottom: 13px;
      color: ${color.primary};
    `
  },
  Input.themeProps.label
)

export const LabelStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      color: ${color("darkBlue")};
    `
  },
  Label.themeProps.label
)

export const PostalCodeInputStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      width: 100%;
    `
  },
  PostalCodeInput.themeProps.input
)

export const PostalCodeInputLocationStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      position: absolute;
      right: 0;
      bottom: 0;
      color: ${color.primary};
    `
  },
  PostalCodeInput.themeProps.location
)
