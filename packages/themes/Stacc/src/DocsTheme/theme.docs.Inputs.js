import { css } from "styled-components"
import { Input, RadioPillItem, fontSmoothing, theming } from "@staccx/base"

export const InputStyling = theming.createVariants(
  {
    documentationHeaderSearch: css`
      width: 100%;
      display: flex;
      align-items: stretch;
      justify-content: stretch;

      input {
        border-width: 0;
        padding-left: ${theming.spacing.medium};
        ${fontSmoothing};
        background-color: ${theming.color.bg};
        &:hover,
        &:active,
        &:focus {
          background-color: ${theming.color.white};
        }
        &::-webkit-input-placeholder {
          color: ${theming.color.wcag};
        }
        &::-moz-placeholder {
          color: ${theming.color.wcag};
        }
        &:-ms-input-placeholder {
          color: ${theming.color.wcag};
        }
      }
    `
  },
  Input.themeProps.wrapper
)

export const RadioPillItemStyling = theming.createVariants(
  {
    documentationHeaderLang: css`
      label {
        border-width: 0;
        background-color: transparent;
        margin-left: 3px;
        margin-right: 3px;
        border-radius: 50px;
        &:last-child {
          border-right-width: 0 !important;
        }

        &:first-child,
        &:last-child {
          border-top-left-radius: 50px !important;
          border-top-right-radius: 50px !important;
          border-bottom-right-radius: 50px !important;
          border-bottom-left-radius: 50px !important;
        }
      }

      input:checked {
        ~ label {
          background-color: ${theming.color.secondary} !important;
          color: ${theming.color.white};
          z-index: 1;
        }

        &:focus ~ label,
        &:hover ~ label,
        &:active ~ label,
        ~ label:hover,
        ~ label:active,
        ~ label:focus {
          background-color: ${theming.color.secondary} !important;
        }
      }
    `
  },
  RadioPillItem.themeProps.wrapper
)

export const RadioPillItemHoverStyling = theming.createVariants(
  {
    documentationHeaderLang: css`
      border-width: 0;
      background-color: ${theming.color.secondary}4D;
    `
  },
  RadioPillItem.themeProps.hover
)
