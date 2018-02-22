import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Downshift from "downshift"
import Label from "../Label/Label"

const DefaultSelectedElement = styled.input`
  color: red;
  cursor: pointer;
`

const DefaultOptionElementWrapper = styled.div`
  border: 1px solid ${p => p.theme.color.line};
`

const DefaultOptionElementInner = styled.div`
  background-color: ${props => (props.highlighted ? "gray" : "white")};
  font-weight: ${props => (props.selected ? "bold" : "normal")};
`

const DefaultOptionElement = ({
  highlighted,
  selected,
  children,
  ...restProps
}) => (
  <DefaultOptionElementInner
    highlighted={highlighted}
    selected={selected}
    {...restProps}
  >
    {children}
  </DefaultOptionElementInner>
)

const Select = ({
  items,
  onChange,
  label,
  selectedElement,
  optionElement,
  optionsWrapperElement
}) => {
  const Selected = selectedElement || DefaultSelectedElement
  const OptionsWrapper = optionsWrapperElement || DefaultOptionElementWrapper
  const Option = optionElement || DefaultOptionElement

  return (
    <Downshift
      onChange={onChange}
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
          <Selected
            {...getInputProps({ placeholder: "Velg" })}
            onClick={() => toggleMenu()}
          />
          {isOpen ? (
            <OptionsWrapper>
              {items.map((item, index) => (
                <Option
                  {...getItemProps({ item })}
                  key={item}
                  highlighted={highlightedIndex === index}
                  selected={selectedItem === item}
                >
                  {item}
                </Option>
              ))}
            </OptionsWrapper>
          ) : null}
        </div>
      )}
    />
  )
}

Select.propTypes = {
  items: PropTypes.array,
  onChange: PropTypes.func,
  selectedElement: PropTypes.element,
  optionElement: PropTypes.element,
  optionsWrapperElement: PropTypes.element,
  label: PropTypes.string
}
export default Select
