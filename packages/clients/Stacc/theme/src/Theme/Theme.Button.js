import { css } from "styled-components"
import { registerStyle, VARIANT_DEFAULT } from "@staccx/theme"
import { Button } from "@staccx/base"

export default registerStyle(
  {
    [VARIANT_DEFAULT]: css``
  },
  Button.themeProps.button
)
