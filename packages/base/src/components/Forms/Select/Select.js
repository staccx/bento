import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Downshift from "downshift"
import Label from "../Label/Label"
import Input from "../Input/Input"

const DefaultOptionElementWrapper = styled.div`
  border: 1px solid ${p => p.theme.color.line};
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
  placeHolderLabel
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
      render={({
        getInputProps,
        getButtonProps,
        getItemProps,
        isOpen,
        inputValue,
        selectedItem,
        highlightedIndex,
        toggleMenu
      }) => (
        <div>
          <Label>{label}</Label>
          {selectedItem ? (
            <Selected
              onClick={() => toggleMenu()}
              selectedItem={selectedItem}
              buttonProps={{ ...getButtonProps() }}
              inputProps={{ ...getInputProps() }}
              toggleMenu={toggleMenu}
            />
          ) : (
            <Placeholder
              {...getInputProps({
                placeholder: placeHolderLabel || ""
              })}
              onClick={() => toggleMenu()}
            />
          )}
          {isOpen && (
            <OptionsWrapper>
              {children.map((child, index) => {
                const item = child.props.data
                return React.cloneElement(child, {
                  ...getItemProps({ item }),
                  ...child.props,
                  highlighted: highlightedIndex === index,
                  selected: selectedItem === child
                })
              })}
            </OptionsWrapper>
          )}
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
  placeHolderElement: PropTypes.func
}
export default Select
