import { css } from "styled-components"
import { List, theming } from "@staccx/base"

export const ListStyling = theming.createVariants(
  {
    newsList: css`
      li {
        padding: ${theming.spacing.small} 0;
        border-bottom: 1px solid ${theming.color.line};
        a {
          text-decoration: none;
          &:hover,
          &:active,
          &:focus {
            color: ${theming.color("text")};
          }
        }
      }
    `,
    casesList: css`
      li {
        a {
          text-decoration: none;
          display: block;
          padding: ${theming.spacing.small} ${theming.spacing.small}
            ${theming.spacing.small} 0;
          transition: background 0.2s ease;

          &:hover,
          &:active,
          &:focus {
            color: ${theming.color("text")};
          }
        }
        border-bottom: 1px solid ${theming.color.line};
      }
    `
  },
  List.themeProps.list
)
