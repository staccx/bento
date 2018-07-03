import React from "react"
import styled from "styled-components"
import { spacing as space, themify, themeProps } from "@staccx/theme"
import themePropTypes from "../../constants/themePropTypes"

const ItemGroup = ({ children, spacing, variant, className, ...restProps }) => (
  <Wrap variant={variant} className={className} {...restProps}>
    <ItemGroupElement spacing={spacing} variant={variant}>
      {children}
    </ItemGroupElement>
  </Wrap>
)

ItemGroup.themeProps = {
  wrapper: {
    name: "ITEM_GROUP_WRAPPER",
    description: "",
    type: themePropTypes.style
  },
  group: {
    name: "ITEM_GROUP",
    description: "",
    type: themePropTypes.style
  }
}
const Wrap = styled.div`
  overflow: hidden;
  ${themify(ItemGroup.themeProps.wrapper)};
`

const ItemGroupElement = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${p => space(p.spacing)} -${p => space(p.spacing)};
  & > * {
    margin: 0 ${p => space(p.spacing)} ${p => space(p.spacing)};
  }
  ${themify(ItemGroup.themeProps.group)};
`

ItemGroup.propTypes = {
  children: themeProps.children.isRequired,
  spacing: themeProps.spacing
}

ItemGroup.defaultProps = {
  spacing: "tiny"
}

export default ItemGroup
