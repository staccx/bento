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
    `,
    contactHours: css`
      color: ${theming.color.wcag};
      font-size: ${theming.font.input};
    `,
    financingTable: css`
      display: flex;
      flex-wrap: wrap;
      color: ${theming.color("g4")};
      font-size: ${theming.font.input};
      margin: 0 -${theming.spacing.medium};

      dt {
        flex-basis: 50%;
        padding: ${theming.spacing.small} ${theming.spacing.medium};

        &:nth-of-type(2n + 2) {
          background-color: ${theming.color("bg2")};
        }
      }

      dd {
        flex-basis: 50%;
        padding: ${theming.spacing.small} ${theming.spacing.medium};
        text-align: right;

        &:nth-of-type(2n + 2) {
          background-color: ${theming.color("bg2")};
        }
      }
    `
  },
  List.themeProps.list
)
