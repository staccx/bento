import { css } from "styled-components"
import { registerStyle, VARIANT_DEFAULT, color, spacing } from "@staccx/theme"
import { Slider } from "@staccx/base"

export const SliderTrack = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      background: rgba(0, 0, 0, 0.5);
    `
  },
  Slider.themeProps.track
)

export const SliderThumb = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      background-color: ${color.white};
      border-color: ${color.white};
    `
  },
  Slider.themeProps.thumb
)
