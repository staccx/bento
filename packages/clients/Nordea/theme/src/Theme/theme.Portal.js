import { css } from "styled-components"
import { registerStyle, VARIANT_DEFAULT, color } from "@staccx/theme"
import { Portal } from "@staccx/base"

export const PortalIcon = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      background-color: ${color.white};
      ${p =>
        p.last &&
        css`
          border: 2px dashed ${color.white};
          background-color: transparent;
        `};
    `,
    secondary: css`
      background-color: currentColor;
      height: 40px;
      width: 40px;
      margin-bottom: 0;
    `,
    newCase: css`
      background-color: ${color("bg1")};
    `
  },
  Portal.themeProps.iconWrapper
)

export const PortalLabel = registerStyle(
  {
    secondary: css`
      display: none;
    `
  },
  Portal.themeProps.label
)
