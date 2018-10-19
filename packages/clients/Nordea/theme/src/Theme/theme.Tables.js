import { css } from "styled-components"
import { Table, hideVisually, theming } from "@staccx/base"

export const TableStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      width: 100%;
      font-size: ${theming.font.base};

      thead {
        ${hideVisually};
      }

      th {
        text-align: left;
      }

      th,
      td {
        padding: ${theming.spacing.tiny} ${theming.spacing.medium};
        vertical-align: top;
        color: ${theming.color.g4};
      }

      tr:first-child th,
      tr:first-child td {
        padding-top: ${theming.spacing.medium};
      }

      tr:last-child th,
      tr:last-child td {
        padding-bottom: ${theming.spacing.medium};
      }

      tbody {
        tr:nth-child(odd) {
          background-color: ${theming.color.white};
        }
        tr:nth-child(even) {
          background-color: ${theming.color("primaryLight")};
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
