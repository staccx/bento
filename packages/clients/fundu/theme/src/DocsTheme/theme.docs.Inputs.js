import { css } from "styled-components"
import { color, spacing, registerStyle } from "@staccx/theme"
import { Input, RadioPillItem } from "@staccx/base"

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
        margin-left: ${spacing.small};
        margin-right: ${spacing.small};
        border-radius: 50px;

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
          background-color: ${color.primary};
          color: ${color.white};
          z-index: 1;
        }

        &:focus ~ label,
        &:hover ~ label,
        &:active ~ label,
        ~ label:hover,
        ~ label:active,
        ~ label:focus {
          background-color: ${color.primary} !important;
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
      background-color: ${color.primary}4D;
    `
  },
  RadioPillItem.themeProps.hover
)
