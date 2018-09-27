import { css } from "styled-components"
import { registerStyle, VARIANT_DEFAULT } from "@staccx/theme"
import { Box } from "@staccx/base"

export default registerStyle(
  {
    [VARIANT_DEFAULT]: css``
  },
  Box.themeProps.box
)
