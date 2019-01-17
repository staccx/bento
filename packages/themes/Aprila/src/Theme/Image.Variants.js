import { theming, Image } from "@staccx/base"
import { css } from "styled-components"
export default theming.createVariants(
  {
    hundo: css`
      width: 100%;
    `
  },
  Image.themeProps.image
)
