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
        padding: ${spacing.tiny};
        vertical-align: top;
        color: ${color.g4};
      }

      tr:last-child th,
      tr:last-child td {
        padding-bottom: ${spacing.medium};
      }

      tbody {
        tr {
          border-bottom: 1px solid ${color.line};
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
