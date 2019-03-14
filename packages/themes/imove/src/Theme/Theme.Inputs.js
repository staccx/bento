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
      font-weight: ${theming.fontWeight.normal};
      font-size: ${theming.font.base};

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
      padding: 4px 0 12px;
      min-height: 32px;
      border-radius: 0;
      color: ${theming.color.white};

      &:hover,
      &:focus,
      &:active {
        background-color: transparent;
        border-width: 0;
      }

      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus textarea:-webkit-autofill,
      textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
      select:-webkit-autofill,
      select:-webkit-autofill:hover,
      select:-webkit-autofill:focus {
        border: 0;
        -webkit-box-shadow: 0 0 0 30px rgba(0, 0, 0, 0) inset !important;
        -webkit-text-fill-color: ${theming.color.white};
        background-color: transparent;
      }
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
      font-weight: 600;
    `,
    conventional: css`
      color: ${theming.color.secondary};
      font-weight: 600;
    `,
    postCode: css`
      font-weight: 600;
    `
  },
  Input.themeProps.label
)

export const LabelStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      color: ${theming.color("darkBlue")};
    `,
    phone: css`
      position: absolute;
      left: 0;
      bottom: 0;
      padding-bottom: 13px;
      color: ${theming.color.primary};
      font-weight: 600;
      z-index: 5;
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
