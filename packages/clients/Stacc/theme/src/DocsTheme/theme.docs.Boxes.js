import { css } from "styled-components"
import { color, spacing, registerStyle } from "@staccx/theme"
import { Box } from "@staccx/base"

export const BoxStyling = registerStyle(
  {
    documentationShortcut: css`
      color: ${color.text};
    `,
    codeBlock: css`
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
    `,
    styleGuideHeader: css`
      height: ${spacing("largePlus")};
      border-bottom: 1px solid ${color.line};
      width: 100%;
      display: flex;
      padding-top: 0;
      padding-bottom: 0;
      align-items: center;
    `
  },
  Box.themeProps.box
)
