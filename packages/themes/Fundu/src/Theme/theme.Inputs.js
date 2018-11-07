import { css } from "styled-components"
import {
  Input,
  Label,
  Select,
  RadioPillItem,
  SliderKeyboardInput,
  CompanyInput,
  PostalCodeInput,
  theming
} from "@staccx/base"

export const InputStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      border-color: ${theming.color.primary};
      &:hover,
      &:focus,
      &:active {
        border-width: 2px;
      }
    `,
    currencyLarge: css`
      input {
        min-height: 96px;
      }
    `
  },
  Input.themeProps.input
)

export const LabelStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      font-weight: ${theming.fontWeight.normal};
    `,
    loanDuration: css`
      padding-bottom: 0;
    `
  },
  Label.themeProps.label
)

export const SelectOptionStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      padding-left: ${theming.spacing.small};
    `,
    calculatorTerms: css`
      background-color: transparent;
    `
  },
  Select.themeProps.optionContainer
)

export const SelectWrapperStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      border-color: ${theming.color.primary};
      border-width: 2px;
    `
  },
  Select.themeProps.wrapper
)

export const SelectSelectedWrapperStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      border-color: ${theming.color.primary};
      border-width: 1px;
    `,
    calculatorTerms: css`
      border-width: 0;
    `
  },
  Select.themeProps.selectedWrapper
)

export const SelectIconButtonStyling = theming.createVariants(
  {
    loanOffer: css`
      right: 0;
    `
  },
  Select.themeProps.iconButton
)

export const SelectOptionsWrapperStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      border-color: ${theming.color.primary};
    `
  },
  Select.themeProps.defaultOptionWrapper
)

export const RadioPillItemStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css``
  },
  RadioPillItem.themeProps.wrapper
)
export const SliderKeyboardWrapperStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      margin: 0;

      label {
        display: block;
        position: relative;
        text-align: center;
        top: auto;
        left: auto;
      }
    `
  },
  SliderKeyboardInput.themeProps.wrapper
)

export const SliderInputStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      input[type="text"] {
        min-width: 240px;
        max-width: 100%;
        min-height: ${theming.targetSize.normal};
        margin-bottom: 24px;
        border-width: 0;
        border-bottom: 1px dashed ${theming.color.line};
        padding: ${theming.spacing.small} 0;
        background-color: transparent;
        text-align: center;
        font-size: 40px;
        outline: none;
        -moz-appearance: textfield;

        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        &:hover,
        &:active,
        &:focus,
        &:-moz-ui-invalid,
        &:invalid {
          outline: none;
          box-shadow: none;
        }

        &:disabled {
          color: ${theming.color.text};
        }
      }
    `
  },
  SliderKeyboardInput.themeProps.input
)

export const CompanyInputLoadFromStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      background-color: ${theming.color("subtleHover")};
    `
  },
  CompanyInput.themeProps.animateLoadFrom
)

export const CompanyInputLoadToStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      background-color: ${theming.color("blue")};
    `
  },
  CompanyInput.themeProps.animateLoadTo
)

export const CompanyInputCloseStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      color: ${theming.color("primary")};
    `
  },
  CompanyInput.themeProps.selectClose
)

export const CompanyInputFlagStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      padding: ${theming.spacing.tiny} 0 ${theming.spacing.tiny}
        ${theming.spacing.small};
      border: 1px solid ${theming.color("primary")};
      border-radius: ${theming.borderRadius};
      background-color: ${theming.color("white")};
    `
  },
  CompanyInput.themeProps.selectFlag
)

export const CompanyInputSelectItemStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      background-color: ${p =>
        p.isSelected ? theming.color("blue") : "transparent"};
    `
  },
  CompanyInput.themeProps.selectItem
)

export const PostalCodeInputStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      width: calc(5ch + ${theming.spacing.large});
    `
  },
  PostalCodeInput.themeProps.input
)
