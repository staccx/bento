import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Downshift from "downshift"
import { multiplyPixelValue } from "@staccx/math"
import { ScaleIn } from "@staccx/animations"
import Label from "../Label/Label"
import Input from "../Input/Input"
import Caret from "../../Icons/Caret"
import Close from "../../Icons/Close"
import {
  color,
  spacing,
  targetSize,
  ThemeComponent,
  themify
} from "@staccx/theme"
import SelectSelected from "./Select.Selected"

export const SELECT_DEFAULT_OPTION_ELEMENT_WRAPPER =
  "SELECT_DEFAULT_OPTION_ELEMENT_WRAPPER"
export const DefaultOptionElementWrapper = styled.div`
  width: 100%;
  border: 1px solid ${color.line};
  border-top-width: 0;,
  ${themify(SELECT_DEFAULT_OPTION_ELEMENT_WRAPPER)}
`

export const SELECT_WRAPPER = "SELECT_WRAPPER"
export const SelectWrapper = styled.div`
  position: relative;
  ${themify(SELECT_WRAPPER)};
`

export const SELECTED_WRAPPER = "SELECT_WRAPPER"
export const SelectedWrapper = styled.div`
  position: relative;
  ${themify(SELECTED_WRAPPER)};
`
export const SELECT_ICON_BUTTON = "SELECT_ICON_BUTTON"
export const IconButton = styled.button`
  position: absolute;
  right: ${spacing.micro};
  bottom: ${p => {
    const value = targetSize.normal()(p)
    return multiplyPixelValue(value, 0.5)
  }};
  width: ${targetSize.small};
  height: ${targetSize.small};
  border: 0;
  padding: 0 ${spacing.tiny};
  text-align: center;
  background-color: transparent;
  fill: ${color.gray};
  transform: translateY(50%);
  transition: fill 0.2s ease;

  &:active,
  &:hover,
  &:focus {
    outline: none;

    svg {
      fill: ${color.primary};
    }
  }
  ${themify(SELECT_ICON_BUTTON)};
`

export const COMPONENT_SELECT_CARET_ICON = "COMPONENT_SELECT_CARET_ICON"
const CaretComp = ({ ...props }) => (
  <ThemeComponent
    tagName={COMPONENT_SELECT_CARET_ICON}
    fallback={Caret}
    {...props}
  />
)

const CaretIcon = styled(CaretComp)`
  transition: transform 0.3s ease-out;
  transform: ${p => (p.isExpanded ? "rotate(180deg)" : "rotate(0)")};
`

export const COMPONENT_SELECT_CLOSE_ICON = "COMPONENT_SELECT_CLOSE_ICON"
const CloseComp = ({ ...props }) => (
  <ThemeComponent
    tagName={COMPONENT_SELECT_CLOSE_ICON}
    fallback={Close}
    {...props}
  />
)
const CloseIcon = styled(CloseComp)`
  transform: scale(0);
  animation: ${ScaleIn} 0.3s ease-in forwards 1;
`

const DefaultPlaceholderElement = Input

const Select = ({
  children,
  onChange,
  label,
  renderSelectedElement,
  selectedElement,
  renderOptionsWrapperElement,
  optionsWrapperElement,
  renderPlaceHolderElement,
  placeHolderElement,
  placeHolderLabel,
  className,
  variant,
  nullable,
  ...restProps
}) => {
  const Selected = renderSelectedElement || selectedElement
  const OptionsWrapper =
    renderOptionsWrapperElement ||
    optionsWrapperElement ||
    DefaultOptionElementWrapper
  const Placeholder =
    renderPlaceHolderElement || placeHolderElement || DefaultPlaceholderElement

  return (
    <Downshift
      onChange={onChange}
      itemToString={item => (item ? item.text : "")}
      {...restProps}
      render={({
        getInputProps,
        getButtonProps,
        getItemProps,
        isOpen,
        inputValue,
        selectedItem,
        highlightedIndex,
        toggleMenu,
        clearSelection
      }) => (
        <div>
          <SelectWrapper className={className}>
            {label && <Label variant={variant}>{label}</Label>}
            {selectedItem ? (
              <SelectedWrapper variant={variant}>
                <Selected
                  onClick={() => toggleMenu()}
                  selectedItem={selectedItem}
                  buttonProps={{ ...getButtonProps() }}
                  inputProps={{ ...getInputProps() }}
                  toggleMenu={toggleMenu}
                  variant={variant}
                />
                {nullable ? (
                  <IconButton
                    onClick={() => clearSelection()}
                    variant={variant}
                  >
                    <CloseIcon variant={variant} />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => toggleMenu()} variant={variant}>
                    <CaretIcon isExpanded={isOpen} variant={variant} />
                  </IconButton>
                )}
              </SelectedWrapper>
            ) : (
              <SelectedWrapper variant={variant}>
                <Placeholder
                  {...getInputProps({
                    placeholder: placeHolderLabel || ""
                  })}
                  variant={variant}
                  onClick={() => toggleMenu()}
                />
                <IconButton onClick={() => toggleMenu()} variant={variant}>
                  <CaretIcon isExpanded={isOpen} variant={variant} />
                </IconButton>
              </SelectedWrapper>
            )}
            {isOpen && (
              <OptionsWrapper variant={variant}>
                {children.map((child, index) => {
                  const item = child.props.data
                  return React.cloneElement(child, {
                    ...getItemProps({ item }),
                    ...child.props,
                    highlighted: highlightedIndex === index,
                    selected: selectedItem === child,
                    variant: variant
                  })
                })}
              </OptionsWrapper>
            )}
          </SelectWrapper>
        </div>
      )}
    />
  )
}

Select.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  renderSelectedElement: (props, propName, componentName) => {
    if (!props.renderSelectedElement && !props.selectedElement) {
      return new Error(
        `One of props 'renderSelectedElement' or 'selectedElement' was not specified in '${componentName}'.`
      )
    }
  },
  selectedElement: (props, propName, componentName) => {
    if (!props.renderSelectedElement && !props.selectedElement) {
      return new Error(
        `One of props 'renderSelectedElement' or 'selectedElement' was not specified in '${componentName}'.`
      )
    }
  },
  items: PropTypes.array,
  onChange: PropTypes.func,
  optionsWrapperElement: PropTypes.func,
  renderOptionsWrapperElement: PropTypes.func,
  label: PropTypes.string,
  placeHolderLabel: PropTypes.string,
  renderPlaceHolderElement: PropTypes.func,
  placeHolderElement: PropTypes.func,
  nullable: PropTypes.bool
}

Select.defaultProps = {
  nullable: true,
  selectedElement: SelectSelected
}
export default Select
