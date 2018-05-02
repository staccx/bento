import { css } from "styled-components"
import { registerStyle, color, spacing } from "@staccx/theme"
import { ButtonStyles } from "@staccx/base"

export default registerStyle({
  menuItem: css`
    display: flex;
    padding-left: ${spacing.small};
    background-color: transparent;
    width: 100%;
    text-align: left;
    color: ${color.text};
    border-bottom: 1px solid ${color.line};

    &:hover,
    &:focus,
    &:active {
      background-color: transparent;
      color: ${color.text};
    }
  `
  }, ButtonStyles.BUTTON
)
