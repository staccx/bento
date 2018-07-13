import { css } from "styled-components"
import { color, spacing, registerStyle } from "@staccx/theme"
import { Input, RadioPillItem, fontSmoothing } from "@staccx/base"

export const InputStyling = registerStyle(
  {
    documentationHeaderSearch: css`
      width: 100%;
      display: flex;
      align-items: stretch;
      justify-content: stretch;

      input {
        border-width: 0;
        padding-left: ${spacing.medium};
        ${fontSmoothing};
        background-color: ${color.bg};
        &:hover,
        &:active,
        &:focus {
          background-color: ${color.white};
        }
        &::-webkit-input-placeholder {
          color: ${color.wcag};
        }
        &::-moz-placeholder {
          color: ${color.wcag};
        }
        &:-ms-input-placeholder {
          color: ${color.wcag};
        }
      }
    `
  },
  Input.themeProps.wrapper
)

export const RadioPillItemStyling = registerStyle(
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
          background-color: ${color.secondary} !important;
          color: ${color.white};
          z-index: 1;
        }

        &:focus ~ label,
        &:hover ~ label,
        &:active ~ label,
        ~ label:hover,
        ~ label:active,
        ~ label:focus {
          background-color: ${color.secondary} !important;
        }
      }
    `
  },
  RadioPillItem.themeProps.wrapper
)

export const RadioPillItemHoverStyling = registerStyle(
  {
    documentationHeaderLang: css`
      border-width: 0;
      background-color: ${color.secondary}4D;
    `
  },
  RadioPillItem.themeProps.hover
)
