import { css } from "styled-components"
import { Portal, theming } from "@staccx/base"

export const PortalIcon = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      background-color: ${theming.color.black};
      svg {
        fill: ${theming.color.white};
      }
    `,
    secondary: css`
      background-color: ${theming.color.black};
      height: 40px;
      width: 40px;
      margin-bottom: 0;
      svg {
        fill: ${theming.color.white};
      }
    `
  },
  Portal.themeProps.iconWrapper
)

export const PortalSVGIcon = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      fill: ${theming.color.white};
    `,
    secondary: css`
      fill: ${theming.color.white};
    `
  },
  Portal.themeProps.icon
)

export const PortalLabel = theming.createVariants(
  {
    secondary: css`
      display: none;
    `
  },
  Portal.themeProps.label
)
