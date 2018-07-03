import { css } from "styled-components"
import { color, spacing, registerStyle } from "@staccx/theme"
import { ListStyles } from "@staccx/base"

export const ListStyling = registerStyle(
  {
    newsList: css`
      li {
        padding: ${spacing.small} ${spacing.tiny};
        a {
          text-decoration: none;
        }
        &:nth-child(even) {
          background-color: ${color("bg1")};
        }
      }
    `,
    casesList: css`
      li {
        padding: ${spacing.small} ${spacing.tiny};
        a {
          text-decoration: none;
        }
        &:nth-child(even) {
          background-color: ${color("bg2")};
        }
      }
    `
  },
  ListStyles.LIST
)
