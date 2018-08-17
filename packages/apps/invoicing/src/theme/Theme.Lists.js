import { css } from "styled-components"
import { color, spacing, registerStyle } from "@staccx/theme"
import { List } from "@staccx/base"

export const ListStyling = registerStyle(
  {
    invoiceCalculation: css`
      li {
        display: flex;
        justify-content: space-between;
        margin-bottom: ${spacing.tiny};

        > span:last-child {
          margin-left: ${spacing.medium};
          text-align: right;
        }
      }
    `
  },
  List.themeProps.list
)
