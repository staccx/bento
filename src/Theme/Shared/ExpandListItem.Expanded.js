import { css } from "styled-components"
import { registerStyle, VARIANT_DEFAULT } from "@staccx/theme"
import { ExpandListItemStyles } from "@staccx/base"

export default registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      padding: 0;
    `
  },
  ExpandListItemStyles.EXPAND_LIST_EXPANDED_ITEM
)
