import { css } from "styled-components"
import { color, spacing, registerStyle } from "@staccx/theme"
import { List } from "@staccx/base"

export const ListStyling = registerStyle(
  {
    newsList: css`
      li {
        padding: ${spacing.small} 0;
        border-bottom: 1px solid ${color.line};
        a {
          text-decoration: none;
          &:hover,
          &:active,
          &:focus {
            color: ${color("text")};
          }
        }
      }
    `,
    casesList: css`
      li {
        a {
          text-decoration: none;
          display: block;
          padding: ${spacing.small} ${spacing.small} ${spacing.small} 0;
          transition: background 0.2s ease;

          &:hover,
          &:active,
          &:focus {
            color: ${color("text")};
          }
        }
        border-bottom: 1px solid ${color.line};
      }
    `
  },
  List.themeProps.list
)
