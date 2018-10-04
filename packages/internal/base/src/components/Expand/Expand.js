import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { BounceIn } from "@staccx/animations"
import {
  themify,
  ThemeComponent,
  spacing,
  color,
  themeProps
} from "@staccx/theme"
import Caret from "../Icons/Caret"
import themePropTypes from "../../constants/themePropTypes"

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
      variant,
      ...restProps
    } = this.props

    const { isExpanded } = this.state

    return (
      <ExpandWrapper className={className} variant={variant} {...restProps}>
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
                variant={variant}
              >
                {child}
                {!hideIcon && (
                  <ExpandIcon variant={variant} isExpanded={isExpanded} />
                )}
              </ExpandBtn>
            )
          }
          return (
            isExpanded && (
              <ExpandItem
                id={title}
                aria-labelledby={title + "2"}
                variant={variant}
              >
                {child}
              </ExpandItem>
            )
          )
        })}
      </ExpandWrapper>
    )
  }
}

Expand.themeProps = {
  iconComponent: {
    name: "COMPONENT_EXPAND_ICON",
    description: "Icon shown. Defaults to Caret",
    type: themePropTypes.component
  },
  icon: {
    name: "EXPAND_ICON",
    description: "Icon style",
    type: themePropTypes.style
  },
  wrapper: {
    name: "EXPAND_WRAPPER",
    description: "Wrapper style",
    type: themePropTypes.style
  },
  button: {
    name: "EXPAND_BTN",
    description: "Button style",
    type: themePropTypes.style
  },
  item: {
    name: "EXPAND_ITEM",
    description: "Item style",
    type: themePropTypes.style
  }
}

const IconComponent = ({ ...props }) => (
  <ThemeComponent
    tagName={Expand.themeProps.iconComponent.name}
    fallback={Caret}
    {...props}
  />
)

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
  ${themify(Expand.themeProps.icon.name)};
`

export const ExpandWrapper = styled.div`
  ${themify(Expand.themeProps.wrapper.name)};
`

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

  ${themify(Expand.themeProps.button.name)};
`

export const ExpandItem = styled.div`
  opacity: 0;
  animation: 0.4s ${BounceIn} 0.05s ease-out forwards 1;
  ${themify(Expand.themeProps.item.name)};
`

Expand.defaultProps = {
  expanded: false,
  className: "",
  title: "",
  hideIcon: false
}

Expand.propTypes = {
  children: themeProps.children.isRequired,
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
