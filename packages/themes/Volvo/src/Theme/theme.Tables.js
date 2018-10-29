import { css } from "styled-components"
import { Table, theming } from "@staccx/base"

export const TableStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      width: 100%;
      font-size: ${theming.font.base};

      thead {
        ${theming.hideVisually};
      }

      th {
        text-align: left;
      }

      th,
      td {
        padding: ${theming.spacing.tiny};
        vertical-align: top;
        color: ${theming.color.g4};
      }

      tr:last-child th,
      tr:last-child td {
        padding-bottom: ${theming.spacing.medium};
      }

      tbody {
        tr {
          border-bottom: 1px solid ${theming.color.line};
        }

        td:last-child {
          text-align: right;
        }
        th {
          font-weight: normal;
        }
      }
    `
  },
  Table.themeProps.table
)
