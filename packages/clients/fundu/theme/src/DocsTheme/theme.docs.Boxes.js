import { css } from "styled-components"
import { color, registerStyle } from "@staccx/theme"
import { BoxStyles } from "@staccx/base"
import { tileStyle } from "../Theme/theme.Boxes"

export const BoxStyling = registerStyle(
  {
    documentationShortcut: css`
      ${tileStyle};
      color: ${color.text};
    `
  },
  BoxStyles.BOX
)
