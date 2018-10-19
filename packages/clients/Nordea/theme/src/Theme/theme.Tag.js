import { css } from "styled-components"
import { Tag, theming } from "@staccx/base"

export const TagStyling = theming.createVariants(
  {
    inverted: css`
      background-color: ${theming.color.white};
    `
  },
  Tag.themeProps.tag
)
