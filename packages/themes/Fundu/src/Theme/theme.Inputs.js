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

const floatingLabel = css`
  font-size: 14px;
  line-height: 1.2;
  padding-bottom: 6px;
  display: block;
  position: absolute;
  top: 12px;
  left: 24px;
`

export const InputStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      display: block;
      min-height: 72px;
      border-width: 0;
      border-radius: 0;
      padding: ${theming.spacing.medium} ${theming.spacing.medium} 0;
      transition: border-color 0.2s ease-out;
    `,
    simple: css``,
    loanOffer: css`
      border-width: 0;
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
    [theming.VARIANT_DEFAULT]: floatingLabel,
    loanDuration: css`
      padding: 0;
    `,
    radioPill: css`
      display: block;
      padding-left: ${theming.spacing.medium};
      padding-top: ${theming.spacing.small};
      padding-bottom: ${theming.spacing.small};
    `,
    loanPurpose: css`
      display: block;
      padding-left: ${theming.spacing.medium};
      padding-top: ${theming.spacing.small};
      padding-bottom: ${theming.spacing.tiny};
    `
  },
  Label.themeProps.label
)

export const SelectOptionStyling = theming.createVariants(
  {
    loanOffer: css`
      &:hover,
      &:active,
      &:focus {
        background-color: transparent;
      }
    `,
    loanPurpose: css`
      padding-left: ${theming.spacing.medium};
    `
  },
  Select.themeProps.optionContainer
)

export const SelectSelectedWrapperStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      border-color: transparent;
      padding-right: 0;
    `,
    loanOffer: css`
      border-color: transparent;
      padding-right: ${theming.spacing.mediumPlus};

      &:hover,
      &:active,
      &:focus {
        background-color: transparent;
        color: ${theming.color.primary};
        border-color: ${theming.color.primary};

        svg {
          fill: ${theming.color.primary};
        }
      }
    `,
    loanPurpose: css`
      padding-right: 0;
      border-color: transparent;
    `
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
    loanOffer: css`
      width: 100%;
      max-height: 150px;
      overflow-y: auto;
      position: absolute;
      z-index: 10;
      background-color: ${theming.color.white};
      box-shadow: rgba(0, 0, 75, 0.015) 0px 2px 2px,
        rgba(0, 0, 75, 0.015) 0px 4px 4px, rgba(0, 0, 75, 0.015) 0px 8px 8px,
        rgba(0, 0, 75, 0.015) 0px 16px 16px, rgba(0, 0, 75, 0.015) 0px 32px 32px,
        rgba(0, 0, 75, 0.015) 0px 64px 64px;
    `,
    loanPurpose: css`
      border-top: 1px solid ${theming.color.line};
      box-shadow: rgba(0, 0, 75, 0.015) 0px 2px 2px,
        rgba(0, 0, 75, 0.015) 0px 4px 4px, rgba(0, 0, 75, 0.015) 0px 8px 8px,
        rgba(0, 0, 75, 0.015) 0px 16px 16px, rgba(0, 0, 75, 0.015) 0px 32px 32px,
        rgba(0, 0, 75, 0.015) 0px 64px 64px;
    `
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
    [theming.VARIANT_DEFAULT]: css`
      display: block;
      min-height: 72px;
      border-width: 0;
      border-radius: 0;
      padding: ${theming.spacing.medium} ${theming.spacing.medium} 0;
      transition: border-color 0.2s ease-out;

      & ~ label {
        font-size: 14px;
        line-height: 1.2;
        padding-bottom: 6px;
        display: block;
        position: absolute;
        top: 12px;
        left: 24px;
      }
    `
  },
  SelectSimple.themeProps.select
)

export const RadioPillItemStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      &:first-child {
        margin-left: ${theming.spacing.medium};
        && label {
          border-radius: 0;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      }
      &:last-child {
        margin-right: ${theming.spacing.medium};
        && label {
          border-radius: 0;
          border-bottom-right-radius: 0;
          border-top-right-radius: 0;
        }
      }
    `
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
