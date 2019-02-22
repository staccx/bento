import { css } from "styled-components"
import { RadioPillItem, RadioPill, theming } from "@staccx/base"

export const RadioPillContainer = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      overflow: hidden;
    `
  },
  RadioPill.themeProps.container
)

export const RadioPillWrapper = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      input:checked {
        &:hover,
        &:focus {
          ~ label {
            color: ${theming.color.secondary} !important;
          }
        }
      }
    `
  },
  RadioPillItem.themeProps.wrapper
)

export const RadioPillItemHover = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      color: ${theming.color.primary};
    `
  },
  RadioPillItem.themeProps.hover
)

export const RadioPillItemChecked = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      background-color: transparent;
      color: ${theming.color.primary};
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 100vw;
        background-color: ${theming.color.primary};
        height: 4px;
        right: 0;
        bottom: 0;
      }
    `
  },
  RadioPillItem.themeProps.checked
)

export const RadioPillLabel = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      font-size: ${theming.font("huge")};
      font-weight: ${theming.fontWeight.bold};
      border-width: 0 !important;
      color: ${p => theming.color("primary")(p)};
      font-family: ${theming.fontFamily.heading};
      padding: 0 ${theming.spacing.small} ${theming.spacing.medium};
      line-height: 1;
    `
  },
  RadioPillItem.themeProps.label
)
