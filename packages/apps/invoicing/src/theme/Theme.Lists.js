import { css } from "styled-components"
import { List, theming } from "@staccx/base"

export const ListStyling = theming.createVariants(
  {
    invoiceCalculation: css`
      li {
        display: flex;
        justify-content: space-between;
        margin-bottom: ${theming.spacing.tiny};

        > span:last-child {
          margin-left: ${theming.spacing.medium};
          text-align: right;
        }
      }
    `
  },
  List.themeProps.list
)
