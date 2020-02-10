import React from "react"
import styled from "styled-components"
import {
  commonPropTypes,
  themePropTypes
} from "../../../constants/themeContants"
import { applyVariants, spacing } from "../../../theming"
/**
 * The ItemGroup object creates spacing between all its children and wraps the items when there is no room
 */
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
  ${applyVariants(ItemGroup.themeProps.wrapper)};
`

const ItemGroupElement = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${p => spacing(p.spacing)} -${p => spacing(p.spacing)};
  & > * {
    margin: 0 ${p => spacing(p.spacing)} ${p => spacing(p.spacing)};
  }
  ${applyVariants(ItemGroup.themeProps.group)};
`

ItemGroup.propTypes = {
  /**
   * The component need children inside it.
   */
  children: commonPropTypes.children.isRequired,
  /**
   * The spacing betweeen the children. The prop handle eight types listed above.
   */
  spacing: commonPropTypes.spacing
}

ItemGroup.defaultProps = {
  spacing: "tiny"
}

export default ItemGroup
