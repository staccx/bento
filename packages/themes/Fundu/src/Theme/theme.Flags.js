import { css } from "styled-components"
import { Flag, theming } from "@staccx/base"

export const FlagStyling = theming.createVariants(
  {
    article: css`
      align-items: flex-start;
      @media screen and (max-width: 800px) {
        div:last-child * {
          margin-left: 0;
          margin-right: 0;
        }
      }
    `
  },
  Flag.themeProps.object
)
