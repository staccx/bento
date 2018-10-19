import { css } from "styled-components"
import { Table, hideVisually, theming } from "@staccx/base"

export const TableStyling = theming.createVariants(
  {
    documentationAttr: css`
      width: 100%;
      font-size: ${theming.font.base};

      thead {
        ${hideVisually};
      }

      td {
        vertical-align: ${p => (p.responses ? "middle" : "top")};
        padding: ${theming.spacing.tiny} 0;
      }

      tbody tr {
        border-bottom: 1px solid ${theming.color.line};
      }

      tr > td:first-child {
        text-align: right;
        padding-right: ${theming.spacing.medium};
        width: 140px;
      }
    `
  },
  Table.themeProps.table
)
