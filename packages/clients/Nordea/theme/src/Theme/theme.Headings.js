import { css } from "styled-components"
import { registerStyle, VARIANT_DEFAULT, color } from "@staccx/theme"
import { HeadingStyles } from "@staccx/base"

export const HeadingStyling = registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      color: ${color("b4")};
    `
  },
  HeadingStyles.HEADING
)
