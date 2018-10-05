import { css } from "styled-components"
import { NewBadge, theming } from "@staccx/base"

export default theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      right: 0;
      bottom: 10px;
      width: 24px;
      height: 24px;
      font-size: ${p => (p.number < 99 ? "14px" : "12px")};

      @media screen and (max-width: 1010px) {
        right: -10px;
        bottom: 6px;
      }
    `
  },
  NewBadge.themeProps.badge
)
