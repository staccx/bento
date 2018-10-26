import { css } from "styled-components"
import { color, spacing, registerStyle } from "@staccx/theme"
import { Image } from "@staccx/base"

export const ImageStyling = registerStyle(
  {
    industryCard: css`
      max-height: 100%;
    `
  },
  Image.themeProps.image
)
