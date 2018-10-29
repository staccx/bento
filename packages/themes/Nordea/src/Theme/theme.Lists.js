import { css } from "styled-components"
import { List, theming } from "@staccx/base"

export const ListStyling = theming.createVariants(
  {
    newsList: css`
      li {
        padding: ${theming.spacing.small};
        a {
          text-decoration: none;
        }
        &:nth-child(even) {
          background-color: ${theming.color("bg1")};
        }
      }
    `,
    casesList: css`
      li {
        a {
          text-decoration: none;
          display: block;
          padding: ${theming.spacing.small};
          transition: background 0.2s ease;

          &:hover,
          &:active,
          &:focus {
            background-color: ${theming.color("subtleHover")};
          }
        }
        &:nth-child(even) {
          background-color: ${theming.color("concrete")};
        }
      }
    `
  },
  List.themeProps.list
)
