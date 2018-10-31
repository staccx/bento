import { css } from "styled-components"
import { List, theming } from "@staccx/base"

export const ListVariants = theming.createVariants(
  {
    columns: css`
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      > li {
        flex-basis: calc(50% - ${theming.spacing.medium});

        &:not(:nth-last-child(-n + 2)) {
          margin-bottom: ${theming.spacing.medium};
        }
      }
    `
  },
  List.themeProps.list
)
