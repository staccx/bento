import { css } from "styled-components"
import { registerStyle } from "@staccx/theme"
import { TextStyles, visuallyHidden } from "@staccx/base"

export const TextStyling = registerStyle(
  {
    visuallyHidden: css`
      ${visuallyHidden};
    `
  },
  TextStyles.BOX
)
