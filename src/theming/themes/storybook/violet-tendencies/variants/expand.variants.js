import { css } from "styled-components"
import Expand from "../../../../../components/Expand/Expand"
import createVariants from "../../../../utils/createVariants"
import { spacing, color, VARIANT_DEFAULT, fontWeight } from "../../../../index"
import opacity from "../../../../../color/opacity"

export const expandBtnVariants = createVariants(
  {
    [VARIANT_DEFAULT]: css`
      background-color: ${color("primaryLight")};
      color: ${color("primary")};
      font-weight: ${fontWeight.bold};
      padding: ${spacing.small};
      cursor: pointer;
      transition: box-shadow 0.2s ease;

      &:hover,
      &:active,
      &:focus {
        background-color: ${color("primaryLight")};
      }
    `,
    primary: css`
      background-color: ${color("primary")};
    `
  },
  Expand.themeProps.button.name
)

export const expandItemVariants = createVariants(
  {
    [VARIANT_DEFAULT]: css`
      background-color: ${color("primaryLight")};
      padding: ${spacing.small};
      border-top: 1px solid ${color.white};
    `
  },
  Expand.themeProps.item.name
)

export const expandIconVariants = createVariants(
  {
    [VARIANT_DEFAULT]: css`
      right: ${spacing.small};
    `
  },
  Expand.themeProps.icon.name
)
