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
    `,
    propsDescription: css`
      font-family: ${theming.fontFamily("mono")};
      width: 100%;
      font-size: ${theming.font.tiny};
      td,
      th {
        padding: ${theming.spacing.tiny};
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
          text-align: right;
        }
      }
      tr {
        border-bottom: 1px solid ${theming.color.line};
      }
      th {
        text-align: left;
        color: ${theming.color.wcag};
        font-size: ${theming.font.tiny};
      }
    `
  },
  Table.themeProps.table
)
