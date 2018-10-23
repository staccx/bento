import { css } from "styled-components"
import { Portal, theming } from "@staccx/base"

export const PortalIcon = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      background-color: ${theming.color.white};
      ${p =>
        p.last &&
        css`
          border: 2px dashed ${theming.color.white};
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
      background-color: ${theming.color("bg1")};
    `
  },
  Portal.themeProps.iconWrapper
)

export const PortalLabel = theming.createVariants(
  {
    secondary: css`
      display: none;
    `
  },
  Portal.themeProps.label
)
