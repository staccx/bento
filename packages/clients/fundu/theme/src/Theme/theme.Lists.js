import { css } from "styled-components"
import { spacing, registerStyle } from "@staccx/theme"
import { ListStyles } from "@staccx/base"

export const ListStyling = registerStyle(
  {
    offerInfoList: css`
      margin-top: ${spacing.tiny};
      li {
        padding: 3px 0;
      }
    `
  },
  ListStyles.LIST
)
