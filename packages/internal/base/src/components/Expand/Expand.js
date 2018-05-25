import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { BounceIn } from "@staccx/animations"
import { themify, ThemeComponent, spacing, color } from "@staccx/theme"
import Caret from "../Icons/Caret"

class Expand extends Component {
  constructor(props) {
    super(props)
    this.handleExpand = this.handleExpand.bind(this)
    this.state = {
      isExpanded: this.props.expanded
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.expanded !== undefined) {
      this.setState({ isExpanded: nextProps.expanded })
    }
  }

  handleExpand(event) {
    this.setState({
      isExpanded: !this.state.isExpanded
    })
    if (this.props.onClick) {
      this.props.onClick(event)
    }
  }

  render() {
    const {
      children,
      className,
      onClick,
      title,
      hideIcon,
      ...restProps
    } = this.props

    const { isExpanded } = this.state

    return (
      <ExpandWrapper className={className} {...restProps}>
        {React.Children.map(children, (child, i) => {
          // Ignore the first child
          if (i < 1) {
            return (
              <ExpandBtn
                title={title}
                isExpanded={isExpanded}
                onClick={this.handleExpand}
                aria-expanded={isExpanded}
                aria-controls={title}
                id={title + "2"}
              >
                {child}
                {!hideIcon && <ExpandIcon isExpanded={isExpanded} />}
              </ExpandBtn>
            )
          }
          return (
            isExpanded && (
              <ExpandItems id={title} aria-labelledby={title + "2"}>
                {child}
              </ExpandItems>
            )
          )
        })}
      </ExpandWrapper>
    )
  }
}

export const COMPONENT_EXPAND_ICON = "COMPONENT_EXPAND_ICON"
const IconComponent = ({ ...props }) => (
  <ThemeComponent tagName={COMPONENT_EXPAND_ICON} fallback={Caret} {...props} />
)

export const EXPAND_ICON = "EXPAND_ICON"
const ExpandIcon = styled(IconComponent)`
  position: absolute;
  right: ${spacing.small()};
  top: 50%;
  fill: ${color.wcag};
  transition: transform 0.3s ease-out;
  transform: ${p =>
    p.isExpanded
      ? "translateY(-50%) rotate(180deg)"
      : "translateY(-50%) rotate(0)"};
  ${themify(EXPAND_ICON)};
`

export const EXPAND_WRAPPER = "EXPAND_WRAPPER"
export const ExpandWrapper = styled.div`
  ${themify(EXPAND_WRAPPER)};
`

export const EXPAND_BTN = "EXPAND_BTN"
export const ExpandBtn = styled.button`
  position: relative;
  background-color: transparent;
  border-width: 0;
  color: inherit;
  padding: 0;
  padding-right: ${spacing.mediumPlus};
  margin: 0;
  min-height: 0;

  &:hover,
  &:focus,
  &:active {
    background-color: transparent;
    border-width: 0;
    color: inherit;
    outline: none;

    ${ExpandIcon} {
      fill: ${color.primary};
    }
  }

  ${themify(EXPAND_BTN)};
`

export const EXPAND_ITEMS = "EXPAND_WRAPPER"
export const ExpandItems = styled.div`
  opacity: 0;
  animation: 0.4s ${BounceIn} 0.05s ease-out forwards 1;
  ${themify(EXPAND_ITEMS)};
`

Expand.defaultProps = {
  expanded: false,
  className: "",
  title: "",
  hideIcon: false
}

Expand.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array
  ]).isRequired,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array
  ]),
  className: PropTypes.string,
  expanded: PropTypes.bool,
  hideIcon: PropTypes.bool
}

export default Expand
