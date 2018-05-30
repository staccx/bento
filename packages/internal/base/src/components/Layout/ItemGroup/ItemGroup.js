import React from "react"
import styled from "styled-components"
import { spacing as space, themify, themeProps } from "@staccx/theme"

const ItemGroup = ({ children, spacing }) => (
  <Wrap>
    <ItemGroupElement spacing={spacing}>{children}</ItemGroupElement>
  </Wrap>
)
export const ITEM_GROUP_WRAPPER = "ITEM_GROUP_WRAPPER"
const Wrap = styled.div`
  overflow: hidden;
  ${themify(ITEM_GROUP_WRAPPER)};
`

export const ITEM_GROUP = "ITEM_GROUP"
const ItemGroupElement = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${p => space(p.spacing)} -${p => space(p.spacing)};
  & > * {
    margin: 0 ${p => space(p.spacing)} ${p => space(p.spacing)};
  }
  ${themify(ITEM_GROUP)};
`

ItemGroup.propTypes = {
  children: themeProps.children.isRequired,
  spacing: themeProps.spacing
}

ItemGroup.defaultProps = {
  spacing: "tiny"
}

export default ItemGroup
