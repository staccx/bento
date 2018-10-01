import { css } from "styled-components"
import { registerStyle, VARIANT_DEFAULT, color, spacing } from "@staccx/theme"
import { Box } from "@staccx/base"

export default registerStyle(
  {
    [VARIANT_DEFAULT]: css``,
    menu: css`
      background: ${color.white};
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      padding-top: ${spacing.small};
      padding-bottom: ${spacing.small};
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    `,
    myCarHeader: css`
      background-color: ${color("bgGray")};
      position: relative;
      padding-left: 0;
      padding-right: 0;
      width: 100vw;
      left: 50%;
      right: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
      margin-bottom: ${spacing.huge};
    `,
    carWrapper: css`
      padding: 0;
      margin-bottom: -120px;
      text-align: center;
    `,
    center: css`
      text-align: center;
      padding: 0;
      svg {
        margin: auto;
      }
    `,
    primary: css`
      background-color: ${color.primary};
      color: ${color.white};
    `,
    subtle: css`
      background-color: ${color("bgGray")};
      color: ${color.text};
    `
  },
  Box.themeProps.box
)
