import { css } from "styled-components"
import { registerStyle, color } from "@staccx/theme"
import { BoxStyles } from "@staccx/base"

export const BoxStyling = registerStyle(
  {
    newsHero: css`
      background-color: ${color.secondary};
    `
  },
  BoxStyles.BOX
)
