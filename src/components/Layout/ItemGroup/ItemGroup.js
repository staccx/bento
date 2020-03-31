import React from "react"
import styled from "styled-components"
import { applyVariants, spacing, commonPropTypes } from "../../../theming"
import themeProps from "./ItemGroup.themeProps"
import { componentCreateFactory } from "../../../theming/utils/createVariantsFunctionFactory"
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

const Wrap = styled.div`
  overflow: hidden;
  ${applyVariants(themeProps.wrapper)};
`

const ItemGroupElement = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${p => spacing(p.spacing)} -${p => spacing(p.spacing)};
  & > * {
    margin: 0 ${p => spacing(p.spacing)} ${p => spacing(p.spacing)};
  }
  ${applyVariants(themeProps.group)};
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
ItemGroup.themeProps = themeProps
ItemGroup.createVariants = componentCreateFactory(ItemGroup)

export default ItemGroup
