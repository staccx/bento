import React from "react"
import PropTypes from "prop-types"
import Downshift from "downshift"

const Select2 = ({
  options,
  onChange,
  renderLabel,
  renderSelected,
  filter,
  listComponent,
  indexer,
  children,
  downshiftProps
}) => {
  return (
    <Downshift
      onChange={selection => onChange(selection)}
      itemToString={item => (item ? item.value : "")}
      initialSelectedItem={options[0]}
      {...downshiftProps}
    >
      {({
        getToggleButtonProps,
        getItemProps,
        getLabelProps,
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
          <div>
            {renderLabel && renderLabel(getLabelProps)}
            {selectedItem &&
              renderSelected(selectedItem, getToggleButtonProps, {
                isOpen,
                clearSelection,
                openMenu,
                closeMenu,
                toggleMenu
              })}
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
          </div>
        )
      }}
    </Downshift>
  )
}
Select2.propTypes = {
  onChange: PropTypes.func,
  children: PropTypes.func,
  renderLabel: PropTypes.func,
  renderSelected: PropTypes.func,
  renderGroupHeader: PropTypes.func,
  groupBy: PropTypes.string,
  options: PropTypes.array,
  downshiftProps: PropTypes.object
}

export default Select2
