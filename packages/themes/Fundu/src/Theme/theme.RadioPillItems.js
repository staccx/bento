import { css } from "styled-components"
import { RadioPillItem, theming } from "@staccx/base"

export const RadioPillItemStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      input ~ label {
        border: none;
        background-color: transparent;
        padding: 0;
        margin-right: 48px;
      }

      input ~ label::before {
        content: "";
        background-color: ${theming.color.white};
        display: inline-block;
        width: 22px;
        height: 22px;
        border: 2px solid ${theming.color.line};
        border-radius: 100%;
        margin-right: 12px;
        box-shadow: inset 0 0 0 4px ${theming.color.white};
        position: relative;
        top: 5px;
      }

      input:checked ~ label[class] {
        background-color: transparent;
        color: initial;
        display: inline-block;
      }

      input:checked ~ label::before {
        background-color: ${theming.color.primary};
      }

      input:focus ~ label[class] {
        color: ${theming.color.primary};
        font-weight: 500;
      }

      input:focus ~ label[class]::before {
        border-color: ${theming.color.primary};
      }
    `
  },
  RadioPillItem.themeProps.wrapper
)

/* label */

export const RadioPillItemLabelStyling = theming.createVariants(
  {
    breadcrumbSelect: css`
      background-color: transparent;
      border: none;
    `
  },
  RadioPillItem.themeProps.label
)

/* :checked */

export const RadioPillItemCheckedStyling = theming.createVariants(
  {
    breadcrumbSelect: css`
      color: ${theming.color.black};
      background-color: transparent;
      font-weight: bold;
    `
  },
  RadioPillItem.themeProps.checked
)

/* :hover, :focus */

export const RadioPillItemHoverStyling = theming.createVariants(
  {
    breadcrumbSelect: css`
      text-decoration: underline;
    `
  },
  RadioPillItem.themeProps.hover
)
