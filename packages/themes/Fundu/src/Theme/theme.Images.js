import { css } from "styled-components"
import { Image, theming } from "@staccx/base"

export const ImageStyling = theming.createVariants(
  {
    industryCard: css`
      max-height: 100%;
    `
  },
  Image.themeProps.image
)
