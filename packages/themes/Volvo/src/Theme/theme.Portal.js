import { css } from "styled-components"
import { registerStyle, VARIANT_DEFAULT, color } from "@staccx/theme"
import { Portal } from "@staccx/base"

export const PortalIcon = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      background-color: ${color.black};
      svg {
        fill: ${color.white};
      }
    `,
    secondary: css`
      background-color: ${color.black};
      height: 40px;
      width: 40px;
      margin-bottom: 0;
      svg {
        fill: ${color.white};
      }
    `
  },
  Portal.themeProps.iconWrapper
)

export const PortalSVGIcon = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      fill: ${color.white};
    `,
    secondary: css`
      fill: ${color.white};
    `
  },
  Portal.themeProps.icon
)

export const PortalLabel = registerStyle(
  {
    secondary: css`
      display: none;
    `
  },
  Portal.themeProps.label
)
