import { css } from "styled-components"
import { Input, PostalCodeInput, Label, theming } from "@staccx/base"

export const InputStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      display: block;
      border-top-width: 0;
      border-left-width: 0;
      border-right-width: 0;
      border-bottom-width: 1px;
      border-color: ${theming.color.primary};
      border-radius: 0;
      transition: border-color 0.2s ease-out;
      padding-left: ${p =>
        p.labelWidth ? p.labelWidth + "px" : theming.spacing.huge};
      font-weight: 400;

      &:hover,
      &:focus,
      &:active {
        background-color: transparent;
        border-bottom-width: 2px;
        border-color: ${theming.color("darkBlue")};
      }
    `,
    conventional: css`
      display: block;
      border-top-width: 0;
      border-left-width: 0;
      border-right-width: 0;
      border-bottom-width: 1px;
      border-color: ${theming.color.primary};
      border-radius: 0;
      padding-left: 0;

      &:hover,
      &:focus,
      &:active {
        background-color: transparent;
        border-bottom-width: 2px;
        border-color: ${theming.color("darkBlue")};
      }
    `,
    postCode: css`
      background-color: transparent;
      border-width: 0;
    `
  },
  Input.themeProps.input
)

export const LabelInputStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      position: absolute;
      left: 0;
      bottom: 0;
      padding-bottom: 13px;
      color: ${theming.color.primary};
    `,
    conventional: css`
      color: ${theming.color.secondary};
    `
  },
  Input.themeProps.label
)

export const LabelStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      color: ${theming.color("darkBlue")};
    `
  },
  Label.themeProps.label
)

export const PostalCodeInputStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      width: 100%;
    `
  },
  PostalCodeInput.themeProps.input
)

export const PostalCodeInputLocationStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      position: absolute;
      right: 0;
      bottom: 0;
      color: ${theming.color.primary};
    `
  },
  PostalCodeInput.themeProps.location
)
