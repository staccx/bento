import { css } from "styled-components"
import { font, color, spacing, registerStyle, fontFamily } from "@staccx/theme"
import { Table, hideVisually } from "@staccx/base"

export const TableStyling = registerStyle(
  {
    documentationAttr: css`
      width: 100%;
      font-size: ${font.base};

      thead {
        ${hideVisually};
      }

      td {
        vertical-align: ${p => (p.responses ? "middle" : "top")};
        padding: ${spacing.tiny} 0;
      }

      tbody tr {
        border-bottom: 1px solid ${color.line};
      }

      tr > td:first-child {
        text-align: right;
        padding-right: ${spacing.medium};
        width: 140px;
      }
    `,
    propsDescription: css`
      font-family: ${fontFamily("mono")};
      width: 100%;
      font-size: ${font.tiny};
      td,
      th {
        padding: ${spacing.tiny};
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
          text-align: right;
        }
      }
      tr {
        border-bottom: 1px solid ${color.line};
      }
      th {
        text-align: left;
        color: ${color.wcag};
        font-size: ${font.tiny};
      }
    `
  },
  Table.themeProps.table
)
