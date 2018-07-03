import { css } from "styled-components"
import { registerStyle, VARIANT_DEFAULT } from "@staccx/theme"
import { NewBadge } from "@staccx/base"

export default registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      right: -8px;
      bottom: -3px;
      transform: scale(0.7);
    `
  },
  NewBadge.themeProps.badge
)
