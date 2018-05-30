import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { BounceIn } from "@staccx/animations"
import Caret from "../../Icons/Caret"
import {
  spacing,
  font,
  color,
  themify,
  ThemeComponent,
  themeProps
} from "@staccx/theme"

const ExpandButton = ({ title, isExpanded, ...props }) => (
  <ExpandBtn isExpanded={isExpanded} {...props}>
    {title} <ExpandIcon isExpanded={isExpanded} />
  </ExpandBtn>
)

export const COMPONENT_EXPAND_LIST_ITEM_BTN = "COMPONENT_EXPAND_LIST_ITEM_BTN"

const BtnComponent = ({ ...props }) => (
  <ThemeComponent
    tagName={COMPONENT_EXPAND_LIST_ITEM_BTN}
    fallback={ExpandButton}
    {...props}
  />
)
class ExpandListItem extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      isExpanded: this.props.expanded
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.expanded !== undefined) {
      this.setState({ isExpanded: nextProps.expanded })
    }
  }

  handleChange(event) {
    this.setState({
      isExpanded: !this.state.isExpanded
    })
    if (this.props.onClick) {
      this.props.onClick(event)
    }
  }
  render() {
    const {
      title,
      children,
      className,
      flush,
      onClick,
      variant,
      ...otherProps
    } = this.props
    const { isExpanded } = this.state
    return (
      <ExpandItem className={className} variant={variant} {...otherProps}>
        <BtnComponent
          {...otherProps}
          title={title}
          isExpanded={isExpanded}
          onClick={this.handleChange}
          aria-expanded={isExpanded}
          aria-controls={title}
          id={title + "2"}
          variant={variant}
        />
        {isExpanded && (
          <ExpandedItem
            flush={flush}
            id={title}
            aria-labelledby={title + "2"}
            variant={variant}
          >
            {children}
          </ExpandedItem>
        )}
      </ExpandItem>
    )
  }
}

export const EXPAND_LIST_ITEM = "EXPAND_LIST_ITEM"
const ExpandItem = styled.li`
  border-bottom: 1px solid ${color.line};
  position: relative;

  &:last-child {
    border-bottom-width: 0;
  }
  ${themify(EXPAND_LIST_ITEM)};
`

export const COMPONENT_EXPAND_LIST_ICON = "COMPONENT_EXPAND_LIST_ICON"
const IconComponent = ({ ...props }) => (
  <ThemeComponent
    tagName={COMPONENT_EXPAND_LIST_ICON}
    fallback={Caret}
    {...props}
  />
)
export const EXPAND_LIST_ICON = "EXPAND_LIST_ICON"
const ExpandIcon = styled(IconComponent)`
  position: absolute;
  right: ${spacing.small()};
  fill: ${color.wcag};
  transition: transform 0.3s ease-out;
  transform: ${p => (p.isExpanded ? "rotate(180deg)" : "rotate(0)")};
  ${themify(EXPAND_LIST_ICON)};
`

export const EXPAND_LIST_BUTTON = "EXPAND_LIST_BUTTON"
const ExpandBtn = styled.button`
  background: transparent;
  border-width: 0;
  color: ${color.text};
  font-size: ${font.base};
  font-weight: ${p => (p.isExpanded ? "bold" : "normal")};
  cursor: pointer;
  padding: ${spacing.small()} ${spacing.large()} ${spacing.small()}
    ${spacing.medium()};
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover,
  &:focus {
    color: ${color.black};
    outline: none;

    ${ExpandIcon} {
      fill: ${color.primary};
    }
  }
  ${themify(EXPAND_LIST_BUTTON)};
`

export const EXPAND_LIST_EXPANDED_ITEM = "EXPAND_LIST_EXPANDED_ITEM"
const ExpandedItem = styled.div`
  opacity: 0;
  animation: 0.4s ${BounceIn} 0.05s ease-out forwards 1;
  padding: ${p => (p.flush ? 0 : spacing.small())}
    ${p => (p.flush ? 0 : spacing.medium())}
    ${p => (p.flush ? 0 : spacing.medium())};
  max-width: ${p => (p.flush ? "auto" : "540px")};
  margin: auto;
  line-height: 1.8;
  ${themify(EXPAND_LIST_EXPANDED_ITEM)};
`

ExpandListItem.defaultProps = {
  expanded: false,
  className: "",
  flush: false
}

ExpandListItem.propTypes = {
  children: themeProps.children.isRequired,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array
  ]).isRequired,
  className: PropTypes.string,
  expanded: PropTypes.bool,
  flush: PropTypes.bool
}

export default ExpandListItem
