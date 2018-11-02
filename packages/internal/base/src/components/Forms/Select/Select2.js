import React from "react"
import PropTypes from "prop-types"
import Downshift from "downshift"
import styled from "styled-components"

const Select2 = ({
  options,
  onChange,
  renderLabel,
  renderSelected,
  renderPlaceholder,
  filter,
  listComponent,
  indexer,
  children,
  placeholder,
  downshiftProps
}) => {
  return (
    <Downshift
      onChange={selection => onChange(selection)}
      itemToString={item => (item ? item.value : "")}
      {...downshiftProps}
    >
      {({
        getToggleButtonProps,
        getItemProps,
        getLabelProps,
        getRootProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        selectItem,
        clearSelection,
        openMenu,
        closeMenu,
        toggleMenu,
        ...rest
      }) => {
        return (
          <Combo {...getRootProps()}>
            {renderLabel && renderLabel(getLabelProps)}
            {selectedItem
              ? renderSelected(selectedItem, getToggleButtonProps, {
                  isOpen,
                  clearSelection,
                  openMenu,
                  closeMenu,
                  toggleMenu
                })
              : renderPlaceholder(getToggleButtonProps)}
            {isOpen
              ? children({
                  options,
                  getItemProps,
                  highlightedIndex,
                  selectedItem,
                  selectItem,
                  toggleMenu
                })
              : null}
          </Combo>
        )
      }}
    </Downshift>
  )
}

const Combo = styled.div`
  position: relative;
`

Select2.propTypes = {
  onChange: PropTypes.func,
  children: PropTypes.func,
  renderLabel: PropTypes.func,
  renderSelected: PropTypes.func,
  renderGroupHeader: PropTypes.func,
  groupBy: PropTypes.string,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  downshiftProps: PropTypes.object
}

export default Select2
