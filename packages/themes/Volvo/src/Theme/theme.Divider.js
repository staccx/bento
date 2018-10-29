import { registerStyle, VARIANT_DEFAULT, color } from "@staccx/theme"
import { css } from "styled-components"
import { Divider } from "@staccx/base"

export const DividerStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      background-color: ${color("bg")};
    `
  },
  Divider.themeProps.rule
)
