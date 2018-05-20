import React from "react"
import Downshift from "downshift"
import styled from "styled-components"
import { spacing, color, font, targetSize } from "@staccx/theme"

/* TODO: Burde til Base? Hvordan er balansen her med Select?  */

const Dropdown = ({
  items,
  selectedItem,
  onChange,
  postfixItems,
  itemRender,
  itemKey,
  id,
  className,
  ...otherProps
}) => (
  <Downshift
    selectedItem={selectedItem}
    onChange={onChange}
    {...otherProps}
    render={({
      isOpen,
      getToggleButtonProps,
      getItemProps,
      highlightedIndex,
      selectedItem: dsSelectedItem
    }) => {
      return (
        <div className={className}>
          <DropdownButton id={id} {...getToggleButtonProps()}>
            <span>
              {selectedItem
                ? (itemRender ? itemRender(selectedItem) : selectedItem) +
                  (postfixItems ? " " + postfixItems : "")
                : this.props.chooseText}
            </span>
            <SelectIcon isOpen={isOpen} />
          </DropdownButton>
          <div style={{ position: "relative" }}>
            {isOpen && (
              <DropdownOpen>
                {items.map((item, index) => {
                  return (
                    <Item
                      {...getItemProps({
                        item,
                        isActive: highlightedIndex === index,
                        isSelected: dsSelectedItem === item
                      })}
                      key={itemKey ? itemKey(item) : item}
                    >
                      {itemRender ? itemRender(item) : item}{" "}
                      {postfixItems && postfixItems}
                    </Item>
                  )
                })}
              </DropdownOpen>
            )}
          </div>
        </div>
      )
    }}
  />
)

const Caret = ({ className }) => (
  <svg className={className} viewBox="0 0 24 16">
    <path d="M3.81 0a.54.54 0 0 0-.38.16L.16 3.47a.56.56 0 0 0 0 .78l11.45 11.59a.54.54 0 0 0 .78 0L23.84 4.25a.56.56 0 0 0 0-.78L20.57.17a.54.54 0 0 0-.77 0L12 8.04 4.2.16A.54.54 0 0 0 3.81 0z" />
  </svg>
)

const SelectIcon = styled(Caret)`
  position: absolute;
  right: ${spacing.small};
  top: 50%;
  width: 12px;
  fill: ${color.gray};
  transform: translateY(-50%)
    ${p => (p.isOpen ? "rotate(180deg)" : "rotate(0)")};
  transition: fill 0.2s ease, transform 0.2s ease;
`

const DropdownButton = styled.button`
  display: block;
  position: relative;
  font-size: ${font.base};
  height: ${targetSize.normal};
  text-align: left;
  width: 100%;
  padding-left: ${spacing.medium};
  padding-right: ${spacing.mediumPlus};
  border-width: 0;
  background-color: transparent;
  &:hover,
  &:active,
  &:focus {
    background-color: ${color.subtleHover};
    outline: none;
    ${SelectIcon} {
      fill: ${color.primary};
    }
  }
`

const Item = styled.li`
  cursor: pointer;
  list-style: none;
  padding: ${spacing.small} ${spacing.medium};
  background-color: ${p => (p.isActive ? color.primary : "transparent")};
  color: ${p => (p.isActive ? color.white : color.black)};
  border-bottom: 1px solid ${color.line};
  font-size: ${font.base};
  min-height: ${targetSize.normal};
  white-space: nowrap;
`

const DropdownOpen = styled.ul`
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  position: absolute;
  z-index: 10;
  background-color: ${color.white};
  box-shadow: rgba(0, 0, 75, 0.015) 0px 2px 2px,
    rgba(0, 0, 75, 0.015) 0px 4px 4px, rgba(0, 0, 75, 0.015) 0px 8px 8px,
    rgba(0, 0, 75, 0.015) 0px 16px 16px, rgba(0, 0, 75, 0.015) 0px 32px 32px,
    rgba(0, 0, 75, 0.015) 0px 64px 64px;
`

export default Dropdown
