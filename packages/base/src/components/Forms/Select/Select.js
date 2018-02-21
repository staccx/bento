import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Downshift from "downshift"
import Label from "../Label/Label"

const defaultSelectedElement = styled.input`
  color: red;
`

const Select = ({ items, onChange, label, SelectedElement, OptionElement }) => {
  const Selected = SelectedElement || defaultSelectedElement
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
          <Label>Label</Label>
          <Selected
            {...getInputProps({ placeholder: "Velg" })}
            onFocus={() => toggleMenu()}
          />
          {isOpen ? (
            <div style={{ border: "1px solid #ccc" }}>
              {items.map((item, index) => (
                <div
                  {...getItemProps({ item })}
                  key={item}
                  style={{
                    backgroundColor:
                      highlightedIndex === index ? "gray" : "white",
                    fontWeight: selectedItem === item ? "bold" : "normal"
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      )}
    />
  )
}

Select.propTypes = {
  items: PropTypes.array,
  onChange: PropTypes.func
}
export default Select
