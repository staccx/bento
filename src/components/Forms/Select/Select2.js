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
          <SWrapper {...getRootProps({ refKey: "innerRef" })}>
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
          </SWrapper>
        )
      }}
    </Downshift>
  )
}

const SWrapper = ({ innerRef, children, ...rest }) => (
  <Wrapper ref={innerRef} {...rest}>
    {children}
  </Wrapper>
)

const Wrapper = styled.div`
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
