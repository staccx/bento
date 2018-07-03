import { css } from "styled-components"
import { registerStyle, VARIANT_DEFAULT } from "@staccx/theme"
import { ExpandListItem } from "@staccx/base"

export default registerStyle(
  {
    [VARIANT_DEFAULT]: css`
      padding: 0;
    `
  },
  ExpandListItem.themeProps.expandedItem
)
