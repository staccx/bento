import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  applyVariants,
  commonPropTypes,
  themePropTypes
} from "../../../theming"

const LayoutItem = ({ area, children, className, variant, ...rest }) => (
  <LayoutItemContainer
    className={className}
    area={area}
    variant={variant}
    {...rest}
  >
    {children}
  </LayoutItemContainer>
)

LayoutItem.themeProps = {
  container: {
    name: "LAYOUT_ITEM",
    description: "",
    type: themePropTypes.style
  }
}

export const LayoutItemContainer = styled.div`
  grid-area: ${props => props.area};
  ${applyVariants(LayoutItem.themeProps.container)};
`

LayoutItem.defaultProps = {
  className: "",
  area: "",
  variant: ""
}

LayoutItem.propTypes = {
  /**
   * The component require a child component.
   */
  children: commonPropTypes.children.isRequired,
  /**
   * This prop assign a class to the component to style it.
   */
  className: PropTypes.string,
  /**
   * The area of the component, e.g. header, body, aside or footer.
   */
  area: PropTypes.string,
  /**
   * The variant get assigned from the theme, so it basically is styling.
   */
  variant: PropTypes.string
}

export default LayoutItem
