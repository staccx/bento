import { css } from "styled-components"
import { Table, theming } from "@staccx/base"
import { hideVisually } from "polished"

export const TableStyling = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      tr {
        height: 36px;
      }

      tr:not(:last-of-type) {
        border-bottom: 1px solid ${theming.color.black}30;
      }

      td:last-child {
        text-align: right;
      }
    `,
    outerBorders: css`
      margin: 30px 0;
      position: relative;
      ::before,
      ::after {
        content: "";
        display: block;
        width: 100%;
        border-top: 3px solid ${theming.color.primary};
        position: absolute;
      }

      ::before {
        top: -30px;
      }

      ::after {
        bottom: -30px;
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
