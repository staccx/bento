import { css } from "styled-components"
import { registerStyle, color } from "@staccx/theme"
import { List } from "@staccx/base"

export const ListStyling = registerStyle(
  {
    details: css`
      border-top: 1px solid ${color.secondary};
      color: ${color.secondary};

      > li {
        border-bottom: 1px solid ${color.secondary};
      }
    `,
    bullets: css`
      > li {
        &::before {
          content: "";
          display: inline-block;
          width: 10px;
          height: 10px;
          background-color: ${color.primary};
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
