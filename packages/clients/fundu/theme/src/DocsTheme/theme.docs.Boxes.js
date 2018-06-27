import { css } from "styled-components"
import { color, registerStyle } from "@staccx/theme"
import { BoxStyles } from "@staccx/base"
import { tileStyle } from "../Theme/theme.Boxes"

export const BoxStyling = registerStyle(
  {
    documentationShortcut: css`
      ${tileStyle};
      color: ${color.text};
    `,
    codeBlock: css`
      ${tileStyle};
      padding: 0;
    `,
    documentationMenu: css`
      position: sticky;
      top: 1px;
    `
  },
  BoxStyles.BOX
)
