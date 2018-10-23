import { css } from "styled-components"
import { Box, theming } from "@staccx/base"
import { tileStyle } from "../Theme/theme.Boxes"

export const BoxStyling = theming.createVariants(
  {
    documentationShortcut: css`
      ${tileStyle};
      color: ${theming.color.text};
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
      padding-top: ${theming.spacing.large};
    `
  },
  Box.themeProps.box
)
