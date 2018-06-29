import { css } from "styled-components"
import { font, color, spacing, registerStyle } from "@staccx/theme"
import { TableStyles, hideVisually } from "@staccx/base"

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
    `
  },
  TableStyles.TABLE
)
