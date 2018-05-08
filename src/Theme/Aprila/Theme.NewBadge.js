import { css } from "styled-components"
import { registerStyle, VARIANT_DEFAULT } from "@staccx/theme"
import { NewBadgeStyles } from "@staccx/base"

export default registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      right: 0;
      bottom: 10px;
      width: 24px;
      height: 24px;
      font-size: ${p => (p.number < 99 ? "14px" : "12px")};
    `
  },
  NewBadgeStyles.NEW_BADGE_BADGE
)
