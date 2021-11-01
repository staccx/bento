import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { BounceIn } from "../../animations"
import Caret from "../Icons/Caret/Caret"
import ThemeComponent from "../Theme/ThemeComponent/ThemeComponent"
import { applyVariants, color, commonPropTypes, spacing } from "../../theming"
import themeProps from "./Expand.themeProps"
import { componentCreateFactory } from "../../theming/utils/createVariantsFunctionFactory"

/**
 * Expand is a component that lets you simply create the posibility to have a heading with an onClick that displays
 an underlying object
 */
const Expand = ({
  className,
  expanded = false,
  closeOnItemClick,
  onClick,
  children,
  title,
  hideIcon,
  variant,
  id,
  ...restProps
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded)

  const handleItemClick = e => {
    if (closeOnItemClick) {
      setIsExpanded(false)
    }
  }

  const handleExpand = event => {
    setIsExpanded(!isExpanded)

    if (onClick) {
      onClick(event)
    }
  }

  React.useEffect(() => {
    setIsExpanded(expanded)
  }, [expanded])

  return (
    <ExpandWrapper className={className} variant={variant} {...restProps}>
      {React.Children.map(children, (child, i) => {
        // Ignore the first child
        if (i < 1) {
          return (
            <ExpandBtn
              title={title}
              isExpanded={isExpanded}
              onClick={handleExpand}
              aria-expanded={isExpanded}
              aria-controls={title}
              id={(id ?? title) + "2"}
              variant={variant}
              type="button"
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
              id={`item-${i}`}
              aria-labelledby={(id ?? title) + "2"}
              variant={variant}
              onClick={handleItemClick}
            >
              {child}
            </ExpandItem>
          )
        )
      })}
    </ExpandWrapper>
  )
}

const IconComponent = ({ ...props }) => (
  <ThemeComponent
    tagName={themeProps.iconComponent.name}
    fallback={Caret}
    {...props}
  />
)

const ExpandIcon = styled(IconComponent)`
  position: absolute;
  right: ${color.small};
  top: 50%;
  fill: ${color.wcag};
  transition: transform 0.3s ease-out;
  right: 0;
  transform: ${p =>
    p.isExpanded
      ? "translateY(-50%) rotate(180deg)"
      : "translateY(-50%) rotate(0)"};
  ${applyVariants(themeProps.icon.name)};
`

export const ExpandWrapper = styled.div`
  ${applyVariants(themeProps.wrapper.name)};
`

export const ExpandBtn = styled.button`
  position: relative;
  background-color: transparent;
  border-width: 0;
  color: inherit;
  padding: 0;
  text-align: left;
  padding-right: ${spacing.mediumPlus};
  margin: 0;
  min-height: 0;
  width: 100%;

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

  ${applyVariants(themeProps.button.name)};
`

export const ExpandItem = styled.div`
  opacity: 0;
  animation: 0.4s ${BounceIn} 0.05s ease-out forwards 1;
  ${applyVariants(themeProps.item.name)};
`

Expand.defaultProps = {
  expanded: false,
  className: "",
  title: "",
  hideIcon: false,
  closeOnItemClick: false
}

Expand.propTypes = {
  children: commonPropTypes.children.isRequired,
  /**
   * Title element
   */
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array
  ]),
  className: PropTypes.string,
  /**
   * Boolean, set to true opens the Expand
   */
  expanded: PropTypes.bool,
  /**
   * Boolean, set to true hides the Icon
   */
  hideIcon: PropTypes.bool,
  /**
   * Set this to true if you want the expand to close after an element has been clicked
   */
  closeOnItemClick: PropTypes.bool
}
Expand.themeProps = themeProps
Expand.createVariants = componentCreateFactory(Expand)

export default Expand
