import { css } from "styled-components"
import {
  font,
  color,
  spacing,
  registerStyle,
  VARIANT_DEFAULT
} from "@staccx/theme"
import { Table } from "@staccx/base"

export const TableStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      width: 100%;
      font-size: ${font.base};

      thead {
        background-color: ${color("b1")};
      }

      th {
        text-align: left;
      }

      th,
      td {
        padding: ${spacing.tiny} ${spacing.small};
      }

      tbody {
        tr:nth-child(odd) {
          background-color: ${color.white};
        }
        tr:nth-child(even) {
          background-color: ${color("primaryLight")};
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
