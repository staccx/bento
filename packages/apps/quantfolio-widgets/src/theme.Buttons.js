import { css } from "styled-components"
import { Button, theming } from "@staccx/base"

export default theming.createVariants(
  {
    sort: css`
      background-color: transparent;
      font-weight: bold;
      color: ${theming.color.text};
      padding: 0;

      &:hover,
      &:active,
      &:focus {
        background-color: transparent;
        outline: none;
        color: ${theming.color("greenDark")};
      }
    `
  },
  Button.themeProps.button
)
