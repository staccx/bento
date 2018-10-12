import { css } from "styled-components"
import {
  registerStyle,
  VARIANT_DEFAULT,
  font,
  color,
  fontWeight,
  fontFamily,
  spacing
} from "@staccx/theme"
import { Toggle } from "@staccx/base"
import { opacity } from "@staccx/color"

export const ToggleElementStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      &:hover,
      &:active,
      &:focus {
        & + div {
          background-color: rgba(18, 79, 94, 0.55);

          &::after {
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
          }
        }
      }

      &::after {
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      }
    `
  },
  Toggle.themeProps.input
)
