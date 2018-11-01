import React from "react"
import PropTypes from "prop-types"
import Search from "../../../hoc/Search/Search"
import { commonPropTypes } from "../../../constants/themeContants"
import Downshift from "downshift"

const Combobox = ({
  options,
  onChange,
  children,
  renderInput,
  renderLabel,
  renderSelected,
  filter,
  indexer,
  downshiftProps
}) => {
  const indices = Array.isArray(filter) ? filter : [filter]
  return (
    <Search documents={options} indices={indices} indexer={indexer}>
      {({ result, search }) => (
        <Downshift
          onChange={selection => onChange(selection)}
          itemToString={item => (item ? item.value : "")}
          onInputValueChange={e => search(e)}
          {...downshiftProps}
        >
          {({
            getInputProps,
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
            ...rest
          }) => {
            return (
              <div>
                {renderLabel && renderLabel(getLabelProps)}
                {!selectedItem && renderInput(getInputProps)}
                {selectedItem &&
                  renderSelected(selectedItem, getInputProps, {
                    clearSelection,
                    openMenu,
                    closeMenu
                  })}
                {isOpen
                  ? children({
                      result,
                      getItemProps,
                      highlightedIndex,
                      selectedItem,
                      selectItem
                    })
                  : null}
              </div>
            )
          }}
        </Downshift>
      )}
    </Search>
  )
}

Combobox.propTypes = {
  onChange: PropTypes.func,
  children: PropTypes.func,
  renderLabel: PropTypes.func,
  renderInput: PropTypes.func,
  renderSelected: PropTypes.func,
  renderGroupHeader: PropTypes.func,
  listComponent: commonPropTypes.children,
  filter: PropTypes.string,
  groupBy: PropTypes.string,
  options: PropTypes.array,
  downshiftProps: PropTypes.object
}

export default Combobox
