import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Downshift from "downshift"
import { multiplyPixelValue } from "@staccx/math"
import Label from "../Label/Label"
import Input from "../Input/Input"
import Caret from "../../Icons/Caret"
import Close from "../../Icons/Close"

const DefaultOptionElementWrapper = styled.div`
  border: 1px solid ${p => p.theme.color.line};
  border-top-width: 0;
`

const SelectedWrapper = styled.div`
  position: relative;
`

const IconButton = styled.button`
  position: absolute;
  right: ${p => p.theme.spacing.small};
  bottom: ${p => multiplyPixelValue(p.theme.targetSize.normal, 0.5)};
  width: ${p => p.theme.targetSize.small};
  height: ${p => p.theme.targetSize.small};
  border: 0;
  padding: 0 ${p => p.theme.spacing.tiny};
  text-align: center;
  background-color: transparent;
  fill: ${p => p.theme.color.gray};
  transform: translateY(50%);
  transition: fill 0.2s ease;

  &:active,
  &:hover,
  &:focus {
    outline: none;

    svg {
      fill: ${p => p.theme.color.primary};
    }
  }
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
  iconCaret,
  iconClose
}) => {
  const Selected = renderSelectedElement || selectedElement
  const OptionsWrapper =
    renderOptionsWrapperElement ||
    optionsWrapperElement ||
    DefaultOptionElementWrapper
  const Placeholder =
    renderPlaceHolderElement || placeHolderElement || DefaultPlaceholderElement
  const CaretIcon = iconCaret || Caret
  const CloseIcon = iconClose || Close

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
        toggleMenu,
        clearSelection
      }) => (
        <div>
          <Label>{label}</Label>
          {selectedItem ? (
            <SelectedWrapper>
              <Selected
                onClick={() => toggleMenu()}
                selectedItem={selectedItem}
                buttonProps={{ ...getButtonProps() }}
                inputProps={{ ...getInputProps() }}
                toggleMenu={toggleMenu}
              />
              <IconButton onClick={() => clearSelection()}>
                <CloseIcon />
              </IconButton>
            </SelectedWrapper>
          ) : (
            <SelectedWrapper>
              <Placeholder
                {...getInputProps({
                  placeholder: placeHolderLabel || ""
                })}
                onClick={() => toggleMenu()}
              />
              <IconButton onClick={() => toggleMenu()}>
                <CaretIcon />
              </IconButton>
            </SelectedWrapper>
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
  placeHolderElement: PropTypes.func,
  iconCaret: PropTypes.element,
  iconClose: PropTypes.element
}
export default Select
