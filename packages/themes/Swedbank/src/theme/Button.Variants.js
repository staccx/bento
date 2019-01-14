import { theming, Button } from "@staccx/base"
import { css } from "styled-components"

export default theming.createVariants(
  {
    navigation: css`
      &:disabled {
        background-color: ${theming.color.gray};
      }
    `
  },
  Button.themeProps.button
)
