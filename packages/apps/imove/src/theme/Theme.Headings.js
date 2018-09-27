import { registerStyle, color, VARIANT_DEFAULT } from "@staccx/theme"
import { css } from "styled-components"
import { Heading } from "@staccx/base"

export default registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      color: ${color("primary")};
    `,
    secondary: css`
      color: ${color("secondary")};
    `
  },
  Heading.themeProps.heading
)
