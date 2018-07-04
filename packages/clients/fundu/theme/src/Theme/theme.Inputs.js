import { css } from "styled-components"
import {
  color,
  spacing,
  registerStyle,
  targetSize,
  VARIANT_DEFAULT
} from "@staccx/theme"
import {
  Input,
  Label,
  Select,
  SelectOption,
  RadioPillItem,
  SelectSimple,
  SliderKeyboardInput,
  CompanyInput,
  PostalCodeInput
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

export const InputStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      display: block;
      min-height: 72px;
      border-width: 0;
      border-radius: 0;
      padding: ${spacing.medium} ${spacing.medium} 0;
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

export const LabelStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: floatingLabel,
    loanDuration: css`
      padding: 0;
    `,
    radioPill: css`
      display: block;
      padding-left: ${spacing.medium};
      padding-top: ${spacing.small};
      padding-bottom: ${spacing.small};
    `,
    loanPurpose: css`
      display: block;
      padding-left: ${spacing.medium};
      padding-top: ${spacing.small};
      padding-bottom: ${spacing.tiny};
    `
  },
  Label.themeProps.label
)

export const SelectOptionStyling = registerStyle(
  {
    loanOffer: css`
      &:hover,
      &:active,
      &:focus {
        background-color: transparent;
      }
    `,
    loanPurpose: css`
      padding-left: ${spacing.medium};
    `
  },
  SelectOption.themeProps.optionContainer
)

export const SelectSelectedWrapperStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      border-color: transparent;
      padding-right: 0;
    `,
    loanOffer: css`
      border-color: transparent;
      padding-right: ${spacing.mediumPlus};

      &:hover,
      &:active,
      &:focus {
        background-color: transparent;
        color: ${color.primary};
        border-color: ${color.primary};

        svg {
          fill: ${color.primary};
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

export const SelectIconButtonStyling = registerStyle(
  {
    loanOffer: css`
      right: 0;
    `
  },
  Select.themeProps.iconButton
)

export const SelectOptionsWrapperStyling = registerStyle(
  {
    loanOffer: css`
      width: 100%;
      max-height: 150px;
      overflow-y: auto;
      position: absolute;
      z-index: 10;
      background-color: ${color.white};
      box-shadow: rgba(0, 0, 75, 0.015) 0px 2px 2px,
        rgba(0, 0, 75, 0.015) 0px 4px 4px, rgba(0, 0, 75, 0.015) 0px 8px 8px,
        rgba(0, 0, 75, 0.015) 0px 16px 16px, rgba(0, 0, 75, 0.015) 0px 32px 32px,
        rgba(0, 0, 75, 0.015) 0px 64px 64px;
    `,
    loanPurpose: css`
      border-top: 1px solid ${color.line};
      box-shadow: rgba(0, 0, 75, 0.015) 0px 2px 2px,
        rgba(0, 0, 75, 0.015) 0px 4px 4px, rgba(0, 0, 75, 0.015) 0px 8px 8px,
        rgba(0, 0, 75, 0.015) 0px 16px 16px, rgba(0, 0, 75, 0.015) 0px 32px 32px,
        rgba(0, 0, 75, 0.015) 0px 64px 64px;
    `
  },
  Select.themeProps.defaultOptionWrapper
)

export const SelectSimpleWrapperStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css``
  },
  SelectSimple.themeProps.wrapper
)

export const SelectSimpleSelectStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      display: block;
      min-height: 72px;
      border-width: 0;
      border-radius: 0;
      padding: ${spacing.medium} ${spacing.medium} 0;
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

export const RadioPillItemStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      &:first-child {
        margin-left: ${spacing.medium};
        && label {
          border-radius: 0;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      }
      &:last-child {
        margin-right: ${spacing.medium};
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
export const SliderKeyboardWrapperStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      max-width: 400px;
      margin: 0 auto;
      padding: 0 ${spacing.medium};

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

export const SliderInputStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      input[type="text"] {
        min-width: 240px;
        max-width: 100%;
        min-height: ${targetSize.normal};
        margin-bottom: 24px;
        border-width: 0;
        border-bottom: 1px dashed ${color.line};
        padding: ${spacing.small} 0;
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
          color: ${color.text};
        }
      }
    `
  },
  SliderKeyboardInput.themeProps.input
)

export const CompanyInputLoadFromStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      background-color: ${color("subtleHover")};
    `
  },
  CompanyInput.themeProps.animateLoadFrom
)

export const CompanyInputLoadToStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      background-color: ${color("blue")};
    `
  },
  CompanyInput.themeProps.animateLoadTo
)

export const CompanyInputCloseStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      color: ${color("blue")};
    `
  },
  CompanyInput.themeProps.selectClose
)

export const CompanyInputFlagStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      padding: ${spacing.mediumPlus} ${spacing.tiny} ${spacing.tiny}
        ${spacing.medium};
    `
  },
  CompanyInput.themeProps.selectFlag
)

export const CompanyInputSelectItemStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      background-color: ${p => (p.isSelected ? color("blue") : "transparent")};
    `
  },
  CompanyInput.themeProps.selectItem
)

export const PostalCodeInputStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      width: calc(5ch + ${spacing.large});
    `
  },
  PostalCodeInput.themeProps.input
)
