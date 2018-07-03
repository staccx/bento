import { css } from "styled-components"
import { registerStyle } from "@staccx/theme"
import { Layout, LayoutItem } from "@staccx/base"

export const LayoutStyling = registerStyle({}, Layout.themeProps.container)

export const LayoutItemStyling = registerStyle(
  {},
  LayoutItem.themeProps.container
)
