import { css } from "styled-components"
import { Table, theming } from "@staccx/base"
import { hideVisually } from "polished"

/* Fundu */

export const TableStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      width: 100%;

      tr:not(:last-of-type) {
        border-bottom: 1px solid ${theming.color.black}30;
      }

      td {
        padding: 10px 0;
      }

      td:last-child {
        text-align: right;
      }
    `,
    hiddenHeader: css`
      thead {
        ${hideVisually};
      }
    `
  },
  Table.themeProps.table
)
