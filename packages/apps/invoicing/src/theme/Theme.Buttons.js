import { css } from "styled-components"
import { Button, theming } from "@staccx/base"

export const ButtonStyling = theming.createVariants(
  {
    customerType: css`
      margin-bottom: 0;
      border-radius: 100px;
      ${p =>
        !p.active &&
        css`
          background-color: transparent;
          color: ${theming.color("text")(p)};
        `};
    `
  },
  Button.themeProps.button
)
