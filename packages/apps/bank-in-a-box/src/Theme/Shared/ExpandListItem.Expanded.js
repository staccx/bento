import { css } from "styled-components"
import { ExpandListItem, theming } from "@staccx/base"

export const ExpandListItemButtonStyle = theming.extendDefault(
  css`
    padding: 0;
  `,
  ExpandListItem.themeProps.expandedItem
)
