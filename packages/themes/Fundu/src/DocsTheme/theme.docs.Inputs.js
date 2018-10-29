import { css } from "styled-components"
import { Input, RadioPillItem, theming } from "@staccx/base"

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
        margin-left: ${theming.spacing.small};
        margin-right: ${theming.spacing.small};
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
          background-color: ${theming.color.primary};
          color: ${theming.color.white};
          z-index: 1;
        }

        &:focus ~ label,
        &:hover ~ label,
        &:active ~ label,
        ~ label:hover,
        ~ label:active,
        ~ label:focus {
          background-color: ${theming.color.primary} !important;
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
      background-color: ${theming.color.primary}4D;
    `
  },
  RadioPillItem.themeProps.hover
)
