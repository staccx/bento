import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { BounceIn } from "../../../animations"
import Caret from "../../Icons/Caret/Caret"
import {
  spacing,
  font,
  color,
  applyVariants,
  commonPropTypes
} from "../../../theming"
import ThemeComponent from "../../Theme/ThemeComponent/ThemeComponent"
import themeProps from "./ExpandListItem.themeProps"
import { componentCreateFactory } from "../../../theming/utils/createVariantsFunctionFactory"

const ExpandButton = ({ title, isExpanded, ...props }) => (
  <ExpandBtn isExpanded={isExpanded} {...props}>
    {title} <ExpandIcon isExpanded={isExpanded} />
  </ExpandBtn>
)

const BtnComponent = ({ ...props }) => (
  <ThemeComponent
    tagName={themeProps.listItemButtonComponent}
    fallback={ExpandButton}
    {...props}
  />
)

/**
 * ExpandListItem is a component that can be used with the List component.
 * Its behaviour is the same as with the Expand component, and allows you to list
 * Expands.
 */
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
      <ExpandItem
        className={className}
        variant={variant}
        isExpanded={isExpanded}
        {...otherProps}
      >
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
            isExpanded={isExpanded}
          >
            {children}
          </ExpandedItem>
        )}
      </ExpandItem>
    )
  }
}

const ExpandItem = styled.li`
  border-bottom: 1px solid ${color.line};
  position: relative;

  &:last-child {
    border-bottom-width: 0;
  }
  ${applyVariants(themeProps.listItem)};
`

const IconComponent = ({ ...props }) => (
  <ThemeComponent
    tagName={themeProps.expandListIconComponent}
    fallback={Caret}
    {...props}
  />
)
const ExpandIcon = styled(IconComponent)`
  position: absolute;
  right: ${spacing.small};
  fill: ${color.wcag};
  transition: transform 0.3s ease-out;
  transform: ${p => (p.isExpanded ? "rotate(180deg)" : "rotate(0)")};
  ${applyVariants(themeProps.listIcon)};
`

const ExpandBtn = styled.button`
  background: transparent;
  border-width: 0;
  color: ${color.text};
  font-size: ${font.base};
  font-weight: ${p => (p.isExpanded ? "bold" : "normal")};
  cursor: pointer;
  padding: ${spacing.small} ${spacing.large} ${spacing.small} ${spacing.medium};
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
  ${applyVariants(themeProps.listButton)};
`

const ExpandedItem = styled.div`
  opacity: 0;
  animation: 0.4s ${BounceIn} 0.05s ease-out forwards 1;
  padding: ${p => (p.flush ? 0 : spacing.small)}
    ${p => (p.flush ? 0 : spacing.medium)}
    ${p => (p.flush ? 0 : spacing.medium)};
  max-width: ${p => (p.flush ? "auto" : "540px")};
  margin: auto;
  line-height: 1.8;
  ${applyVariants(themeProps.expandedItem)};
`

ExpandListItem.defaultProps = {
  expanded: false,
  className: "",
  flush: false
}

ExpandListItem.propTypes = {
  /**
   * Will be shown when expanding
   */
  children: commonPropTypes.children.isRequired,
  /**
   * Title for the expand (what is shown before expanding)
   */
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array
  ]).isRequired,
  className: PropTypes.string,
  /**
   * Expanded true or false, if true it renders open
   */
  expanded: PropTypes.bool,
  flush: PropTypes.bool
}

ExpandListItem.themeProps = themeProps
ExpandListItem.createVariants = componentCreateFactory(ExpandListItem)

export default ExpandListItem
