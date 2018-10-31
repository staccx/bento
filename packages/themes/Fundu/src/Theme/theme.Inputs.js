import { css } from "styled-components"
import {
  Input,
  Label,
  Select,
  RadioPillItem,
  SelectSimple,
  SliderKeyboardInput,
  CompanyInput,
  PostalCodeInput,
  theming
} from "@staccx/base"

export const InputStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css``,
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
    [theming.VARIANT_DEFAULT]: css``
  },
  Label.themeProps.label
)

export const SelectOptionStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      padding-left: ${theming.spacing.mediumPlus};
    `
  },
  Select.themeProps.optionContainer
)

export const SelectSelectedWrapperStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css``
  },
  Select.themeProps.wrapper
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
    loanOffer: css``
  },
  Select.themeProps.defaultOptionWrapper
)

export const SelectSimpleWrapperStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css``
  },
  SelectSimple.themeProps.wrapper
)

export const SelectSimpleSelectStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css``
  },
  SelectSimple.themeProps.select
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
      max-width: 400px;
      margin: 0 auto;
      padding: 0 ${theming.spacing.medium};

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
      color: ${theming.color("blue")};
    `
  },
  CompanyInput.themeProps.selectClose
)

export const CompanyInputFlagStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      padding: ${theming.spacing.mediumPlus} ${theming.spacing.tiny}
        ${theming.spacing.tiny} ${theming.spacing.medium};
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
