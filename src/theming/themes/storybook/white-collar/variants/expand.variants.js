import { css } from "styled-components"
import Expand from "../../../../../components/Expand/Expand"
import createVariants from "../../../../utils/createVariants"
import {
  spacing,
  color,
  VARIANT_DEFAULT,
  borderRadius
} from "../../../../index"

export const expandBtnVariants = createVariants(
  {
    [VARIANT_DEFAULT]: css`
      background-color: ${color("bgGray")};
      color: ${color("primary")};
      padding: ${spacing.small};
      cursor: pointer;
      transition: box-shadow 0.2s ease;
      border-radius: ${borderRadius};
      ${p =>
        p.isExpanded &&
        css`
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        `}

      &:hover,
      &:active,
      &:focus {
        background-color: ${color("bgGrayDark")};
      }
    `,
    primary: css`
      padding: ${spacing.small};
      background-color: ${color("primary")};
      color: ${color("white")};

      &:hover,
      &:active,
      &:focus {
        background-color: ${color("primary")};
        color: ${color("white")};
      }
    `
  },
  Expand.themeProps.button.name
)

export const expandItemVariants = createVariants(
  {
    [VARIANT_DEFAULT]: css`
      background-color: ${color("bgGray")};
      padding: ${spacing.small};
      border-top: 1px solid ${color.white};
      border-radius: ${borderRadius};
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    `
  },
  Expand.themeProps.item.name
)

export const expandIconVariants = createVariants(
  {
    [VARIANT_DEFAULT]: css`
      right: ${spacing.small};
    `,
    primary: css`
      fill: ${color("white")};
      right: ${spacing.small};
    `
  },
  Expand.themeProps.icon.name
)
