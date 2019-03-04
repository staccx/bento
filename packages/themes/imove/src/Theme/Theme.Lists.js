import { css } from "styled-components"
import { List, theming } from "@staccx/base"

export const ListStyling = theming.createVariants(
  {
    details: css`
      border-top: 1px solid ${theming.color.secondary};
      color: ${theming.color.secondary};
      padding-left: 0;
      padding-right: 0;

      > li {
        border-bottom: 1px solid ${theming.color.secondary};
      }
    `,
    lineItems: css`
      color: ${theming.color.secondary};

      > li:not(:last-child) {
        border-bottom: 1px solid ${theming.color.secondary};
      }
    `,
    bullets: css`
      > li {
        &::before {
          content: "";
          display: inline-block;
          width: 10px;
          height: 10px;
          background-color: ${theming.color.primary};
          border-radius: 50%;
          margin-right: 6px;
          transform: translateY(-1px);
        }
        &:not(:last-child) {
          margin-bottom: 6px;
        }
      }
    `
  },
  List.themeProps.list
)
