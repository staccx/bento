import { css } from "styled-components"
import { registerStyle, color } from "@staccx/theme"
import { ButtonStyles } from "@staccx/base"

export default registerStyle(
  {expand: css`
    display: block;
    width: 100%;
    margin: 0;
    background-color: transparent;
    color: ${color.secondary};

    &:hover,
    &:focus,
    &:active {
      background-color: transparent;
      color: ${color.text};
    }
  `},
  ButtonStyles.BUTTON
)
