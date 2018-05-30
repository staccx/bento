import { css } from "styled-components"
import { registerStyle, VARIANT_DEFAULT } from "@staccx/theme"
import { NewBadgeStyles } from "@staccx/base"

export default registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      right: -8px;
      bottom: -3px;
      transform: scale(0.7);
    `
  },
  NewBadgeStyles.NEW_BADGE_BADGE
)
