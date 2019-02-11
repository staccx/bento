import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Search from "../../../hoc/Search/Search"
import { commonPropTypes } from "../../../constants/themeContants"
import Downshift from "downshift"
import { applyVariants } from "../../../theming"
import Wrapper from "../../Layout/Wrapper/Wrapper"

const Combobox = ({
  options,
  onChange,
  children,
  renderInput,
  renderLabel,
  renderSelected,
  filter,
  indexer,
  downshiftProps,
  variant
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
              <ComboWrapper
                variant={variant}
                {...getRootProps({ refKey: "innerRef" })}
              >
                {renderLabel && renderLabel(getLabelProps)}
                {!selectedItem && renderInput(getInputProps)}
                {selectedItem &&
                  renderSelected(selectedItem, getInputProps, {
                    clearSelection,
                    openMenu,
                    closeMenu,
                    variant
                  })}
                {isOpen
                  ? children({
                      result,
                      getItemProps,
                      highlightedIndex,
                      selectedItem,
                      selectItem,
                      variant
                    })
                  : null}
              </ComboWrapper>
            )
          }}
        </Downshift>
      )}
    </Search>
  )
}

const ComboWrapper = ({ innerRef, children, variant }) => (
  <Wrap variant={variant} ref={innerRef}>
    {children}
  </Wrap>
)

const Wrap = styled.div`
  position: relative;
  ${applyVariants(Wrapper.themeProps.wrapper)}
`

Combobox.propTypes = {
  onChange: PropTypes.func,
  children: PropTypes.func,
  renderLabel: PropTypes.func,
  renderInput: PropTypes.func,
  renderSelected: PropTypes.func,
  renderGroupHeader: PropTypes.func,
  listComponent: commonPropTypes.children,
  filter: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  groupBy: PropTypes.string,
  options: PropTypes.array,
  downshiftProps: PropTypes.object
}

export default Combobox
