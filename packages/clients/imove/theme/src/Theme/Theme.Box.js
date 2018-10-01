import { css } from "styled-components"
import { registerStyle, VARIANT_DEFAULT, color } from "@staccx/theme"
import { Box } from "@staccx/base"

export default registerStyle(
  {
    [VARIANT_DEFAULT]: css``,
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
