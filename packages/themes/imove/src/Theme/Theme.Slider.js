import { css } from "styled-components"
import { Slider, theming } from "@staccx/base"

export const SliderTrack = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      background: rgba(0, 0, 0, 0.5);
    `
  },
  Slider.themeProps.track
)

export const SliderThumb = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      background-color: ${theming.color.white};
      border-color: ${theming.color.white};
      border-bottom-right-radius: 0;
    `
  },
  Slider.themeProps.thumb
)
