import { css } from "styled-components"
import { NewBadge, theming } from "@staccx/base"

export default theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      right: -8px;
      bottom: -3px;
      transform: scale(0.7);
    `
  },
  NewBadge.themeProps.badge
)
