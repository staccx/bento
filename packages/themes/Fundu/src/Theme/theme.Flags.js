import { css } from "styled-components"
import { Flag, theming } from "@staccx/base"

export const FlagStyling = theming.createVariants(
  {
    article: css`
      align-items: flex-start;
    `
  },
  Flag.themeProps.object
)
