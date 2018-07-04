import { css } from "styled-components"
import { registerStyle } from "@staccx/theme"
import { Portal } from "@staccx/base"

export const PortalIcon = registerStyle(
  {
    secondary: css`
      background-color: currentColor;
      height: 40px;
      width: 40px;
      margin-bottom: 0;
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
