import { css } from "styled-components"
import { registerStyle, color } from "@staccx/theme"
import { Button } from "@staccx/base"

export const ButtonStyling = registerStyle(
  {
    customerType: css`
      margin-bottom: 0;
      border-radius: 100px;
      ${p =>
        !p.active &&
        css`
          background-color: transparent;
          color: ${color("text")(p)};
        `};
    `
  },
  Button.themeProps.button
)
