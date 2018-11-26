import { css } from "styled-components"
import {
  Input,
  Label,
  Select,
  RadioPillItem,
  SliderKeyboardInput,
  Slider2,
  Slider2Track,
  CompanyInput,
  PostalCodeInput,
  theming,
  FileInput
} from "@staccx/base"

export const InputStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      border-color: ${theming.color.primary};
      &:hover,
      &:focus,
      &:active {
        /* border-width: 2px; */
        box-shadow: 0 0 0 1px ${theming.color.primary};
      }
    `,
    currencyLarge: css`
      input {
        min-height: 96px;
      }
    `,
    calculatorSlider: css`
      background-color: coral;
      background: linear-gradient(
        to right,
        ${theming.color("green")} 0%,
        ${theming.color("green")} ${p => p.percentage * 100}%,
        transparent ${p => p.percentage * 100}%,
        transparent 100%
      );
      border-color: ${theming.color("green")};
      border-width: 3px;
      font-size: ${theming.font.h1};
      min-height: 75px;
      line-height: 1;
      padding-top: 10px;
      text-align: center;
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

export const HelpButtonStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      position: relative;
      top: 3px;
      outline: none;
      border-radius: 100%;
      box-shadow: 0 0 0 0 #3c61e730;

      &:focus svg {
        fill: ${theming.color.primary};
      }

      &:focus {
        box-shadow: 0 0 0 1px ${theming.color.primary};
      }
    `
  },
  Input.themeProps.helpButton
)

export const HelpTextStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      color: ${theming.color.primary};
      font-size: ${theming.font.tiny};
      padding-bottom: ${theming.spacing.small};
    `
  },
  Input.themeProps.helpText
)

export const SelectOptionStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      border: 1px solid ${theming.color.primary};
      padding-left: ${theming.spacing.small};
      &:hover,
      &:focus {
        /* border: 2px solid ${theming.color.primary}; */
        box-shadow: 0 0 0 1px ${theming.color.primary};
      }
      height: 44px;
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
      border-width: 0;
    `,
    calculatorTerms: css`
      border-width: 0;
    `
  },
  Select.themeProps.selectedWrapper
)

export const SelectIconButtonStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      pointer-events: none;
    `,
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
      box-shadow: 0 0 0 1px ${theming.color.primary};
      li button {
        border: 0;
        &:focus {
          background-color: ${theming.color.black}10;
        }
      }
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

export const FileInputInputStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      &:focus + label {
        box-shadow: 0 0 0 1px ${theming.color.primary};
      }
    `
  },
  FileInput.themeProps.input
)

export const FileInputLabelStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      width: 100%;
      display: flex;
      padding-left: ${theming.spacing.small};
      padding-right: ${theming.spacing.small};
      background-color: ${theming.color.white};
      color: ${theming.color.primary};
      border: 1px solid ${theming.color.primary};
      line-height: inherit;
      span {
        max-width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: inline-block;
      }
    `
  },
  FileInput.themeProps.label
)

export const Slider2RailStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      background-color: ${theming.color.disabled};
      height: 8px;
      top: 2px;
    `
  },
  Slider2.themeProps.rail
)

export const Slider2TrackStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      background-color: ${theming.color("green")};
      height: 8px;
      top: 2px;
    `
  },
  Slider2Track.themeProps.track
)
