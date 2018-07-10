import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { spacing, color } from "@staccx/theme"
import { RadioPill, RadioPillItem } from "@staccx/base"

const sizes = ["320px", "560px", "720px", "1024px", "100%"]

class ComponentDocumentation extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      width: props.width
    }
  }

  render() {
    const { children } = this.props
    return (
      <React.Fragment>
        <RadioPill
          group={"size"}
          onChange={e => {
            this.setState({ width: e.target.value })
          }}
        >
          {sizes.map(size => (
            <RadioPillItem
              value={size}
              id={size}
              defaultChecked={this.state.width === size}
            >
              {size}
            </RadioPillItem>
          ))}
        </RadioPill>
        <ComponentDocumentationWrapper width={this.state.width}>
          {children}
        </ComponentDocumentationWrapper>
      </React.Fragment>
    )
  }
}

const ComponentDocumentationWrapper = styled.div`
  background-color: ${color.bgGray};
  padding: ${spacing.medium};
  width: ${({ width }) => width};
`
export default ComponentDocumentation

ComponentDocumentation.propTypes = {
  children: PropTypes.any,
  width: PropTypes.string
}

ComponentDocumentation.defaultProps = {
  width: "100%"
}
