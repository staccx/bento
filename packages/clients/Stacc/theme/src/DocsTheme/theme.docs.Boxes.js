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
      box-shadow: rgba(0, 0, 75, 0.015) 0px 2px 2px,
        rgba(0, 0, 75, 0.015) 0px 4px 4px, rgba(0, 0, 75, 0.015) 0px 8px 8px,
        rgba(0, 0, 75, 0.015) 0px 16px 16px, rgba(0, 0, 75, 0.015) 0px 32px 32px,
        rgba(0, 0, 75, 0.015) 0px 64px 64px;
      border: 1px solid ${color.line};
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
    `,
    overflow: css`
      padding: 0;
      border-radius: 0px;
      overflow-x: auto;
      max-width: 806px;
    `,
    customProps: css`
      border-top: 1px solid ${color.line};
      background-color: ${color.white};
    `
  },
  Box.themeProps.box
)
