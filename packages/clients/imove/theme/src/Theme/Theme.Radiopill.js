import { css } from "styled-components"
import {
  registerStyle,
  VARIANT_DEFAULT,
  font,
  color,
  fontWeight,
  fontFamily
} from "@staccx/theme"
import { RadioPillItem, RadioPill } from "@staccx/base"
import { opacity } from "@staccx/color"

export const RadioPillContainer = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      overflow: hidden;
    `
  },
  RadioPill.themeProps.container
)

export const RadioPillItemHover = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      color: ${color.primary};
    `
  },
  RadioPillItem.themeProps.hover
)

export const RadioPillItemChecked = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      background-color: transparent;
      color: ${color.primary};
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 100vw;
        background-color: ${color.primary};
        height: 4px;
        right: 0;
        bottom: 0;
      }
    `
  },
  RadioPillItem.themeProps.checked
)

export const RadioPillLabel = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      font-size: ${font("huge")};
      font-weight: ${fontWeight.bold};
      border-width: 0 !important;
      color: ${p => opacity(color("primary")(p), 0.5)};
      font-family: ${fontFamily.heading};
    `
  },
  RadioPillItem.themeProps.label
)
