import { css } from "styled-components"
import {
  font,
  color,
  spacing,
  registerStyle,
  VARIANT_DEFAULT
} from "@staccx/theme"
import { Table, hideVisually } from "@staccx/base"

export const TableStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      width: 100%;
      font-size: ${font.base};

      thead {
        ${hideVisually};
      }

      th {
        text-align: left;
      }

      th,
      td {
        padding: ${spacing.tiny} ${spacing.medium};
        vertical-align: top;
        color: ${color.g4};
      }

      tr:first-child th,
      tr:first-child td {
        padding-top: ${spacing.medium};
      }

      tr:last-child th,
      tr:last-child td {
        padding-bottom: ${spacing.medium};
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
