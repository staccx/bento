import { css } from "styled-components"
import { color, registerStyle } from "@staccx/theme"
import { Tag } from "@staccx/base"

export const TagStyling = registerStyle(
  {
    inverted: css`
      background-color: ${color.gray};
      color: ${color.white};
    `
  },
  Tag.themeProps.tag
)
