import { css } from "styled-components"
import { color, spacing, registerStyle } from "@staccx/theme"
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
    `,
    documentationHeaderSearch: css`
      display: flex;
      justify-content: stretch;
      align-items: stretch;
    `,
    documentationTypePath: css`
      display: flex;
      align-items: center;
      max-width: 100%;
    `,
    apiContainer: css`
      padding-top: ${spacing.large};
    `
  },
  BoxStyles.BOX
)
