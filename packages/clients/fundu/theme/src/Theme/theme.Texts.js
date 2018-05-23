import { css } from "styled-components"
import { registerStyle } from "@staccx/theme"
import { TextStyles, hideVisually } from "@staccx/base"

export const TextStyling = registerStyle(
  {
    visuallyHidden: css`
      ${hideVisually};
    `
  },
  TextStyles.TEXT
)
