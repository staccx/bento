import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import Downshift from "downshift"
import { ScaleIn } from "@staccx/animations"
import { stringIncludes } from "@staccx/utils"
import Label from "../Label/Label"
import Input from "../Input/Input"
import Caret from "../../Icons/Caret"
import Close from "../../Icons/Close"
import {
  color,
  spacing,
  targetSize,
  borderRadius,
  ThemeComponent,
  themify
} from "@staccx/theme"
import SelectOption from "./Select.Option"

export const COMPONENT_SELECT_CARET_ICON = "COMPONENT_SELECT_CARET_ICON"
const CaretComp = ({ ...props }) => (
  <ThemeComponent
    tagName={COMPONENT_SELECT_CARET_ICON}
    fallback={Caret}
    {...props}
  />
)

const CaretIcon = styled(CaretComp)`
  transition: transform 0.3s ease-out;
  transform: ${p => (p.isExpanded ? "rotate(180deg)" : "rotate(0)")};
`

export const COMPONENT_SELECT_CLOSE_ICON = "COMPONENT_SELECT_CLOSE_ICON"
const CloseComp = ({ ...props }) => (
  <ThemeComponent
    tagName={COMPONENT_SELECT_CLOSE_ICON}
    fallback={Close}
    {...props}
  />
)
export const COMPONENT_SELECT_CLOSE_ICON_STYLE =
  "COMPONENT_SELECT_CLOSE_ICON_STYLE"
const CloseIcon = styled(CloseComp)`
  transform: scale(0);
  animation: ${ScaleIn} 0.3s ease-in forwards 1;
  ${themify(COMPONENT_SELECT_CLOSE_ICON_STYLE)};
`

class Select extends React.PureComponent {
  constructor(props, context) {
    super(props, context)
    this.state = {
      filter: null,
      selected: this.props.selectedItem
        ? this.props.selectedItem
        : !this.props.combobox
          ? this.props.placeHolderLabel
            ? this.props.placeHolderLabel
            : this.props.items[0]
          : null
    }

    this.setFilter = this.setFilter.bind(this)
    this.filterItem = this.filterItem.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(selected) {
    this.setState({ selected })
  }
  setFilter(filter) {
    this.setState({ filter })
  }

  filterItem(item) {
    const { filter } = this.state
    const { filterProp } = this.props
    const field = filterProp ? item[filterProp] : item
    return filter ? stringIncludes(field, filter) : true
  }

  render() {
    const {
      onChange,
      placeHolderLabel,
      itemToString,
      className,
      variant,
      ...restProps
    } = this.props

    const OptionsWrapper = this.props.OptionsWrapper
    const Option = this.props.Option
    const Selected = this.props.Selected || Option
    const Placeholder = this.props.Placeholder

    const toString = item => {
      if (!item) {
        return ""
      }
      if (!placeHolderLabel || item !== placeHolderLabel) {
        return itemToString(item)
      }

      return placeHolderLabel
    }

    return (
      <Downshift
        onChange={onChange}
        itemToString={toString}
        selectedItem={this.state.selected}
        onSelect={this.handleSelect}
        onInputValueChange={this.setFilter}
        {...restProps}
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
        }) => {
          return (
            <div>
              <SelectWrapper className={className} variant={variant}>
                {this.props.label && (
                  <Label variant={variant}>{this.props.label}</Label>
                )}
                {selectedItem ? (
                  <SelectedWrapper variant={variant} isSelected>
                    {this.props.renderSelected ? (
                      this.props.renderSelected({
                        selectedItem,
                        toggleMenu,
                        getButtonProps,
                        getInputProps
                      })
                    ) : (
                      <Selected
                        onClick={() => toggleMenu()}
                        selectedItem={selectedItem}
                        buttonProps={{ ...getButtonProps() }}
                        inputProps={{ ...getInputProps() }}
                        toggleMenu={toggleMenu}
                        variant={variant}
                        isSelected
                      >
                        {toString(selectedItem)}
                      </Selected>
                    )}
                    {this.props.combobox ? (
                      <IconButton
                        onClick={() => clearSelection()}
                        variant={variant}
                        type={"button"}
                        isSelected
                      >
                        <CloseIcon variant={variant} />
                      </IconButton>
                    ) : (
                      <IconButton
                        onClick={() => toggleMenu()}
                        variant={variant}
                        type={"button"}
                        isSelected
                      >
                        <CaretIcon isExpanded={isOpen} variant={variant} />
                      </IconButton>
                    )}
                  </SelectedWrapper>
                ) : (
                  <SelectedWrapper
                    variant={variant}
                    combobox={this.props.combobox}
                  >
                    {this.props.combobox ? (
                      <Placeholder
                        {...getInputProps({
                          placeholder: placeHolderLabel || ""
                        })}
                        variant={variant}
                        onClick={() => toggleMenu()}
                        autoFocus
                      />
                    ) : (
                      <Selected
                        onClick={() => toggleMenu()}
                        selectedItem={selectedItem}
                        buttonProps={{ ...getButtonProps() }}
                        inputProps={{ ...getInputProps() }}
                        toggleMenu={toggleMenu}
                        variant={variant}
                      />
                    )}
                    <IconButton onClick={() => toggleMenu()} variant={variant}>
                      <CaretIcon isExpanded={isOpen} variant={variant} />
                    </IconButton>
                  </SelectedWrapper>
                )}
                {isOpen && (
                  <OptionsWrapper variant={variant}>
                    {this.props.items
                      .filter(
                        item => (selectedItem ? item : this.filterItem(item))
                      )
                      .slice(
                        0,
                        this.props.maxItems === -1
                          ? this.props.items.length
                          : this.props.maxItems
                      )
                      .map((item, index) => {
                        if (this.props.children) {
                          return this.props.children({
                            item,
                            getItemProps,
                            highlighted: highlightedIndex === index,
                            selected: selectedItem === item,
                            reset: () => {
                              toggleMenu()
                            }
                          })
                        }
                        return (
                          <li key={this.props.itemToKey(item)}>
                            <Option
                              data={item}
                              variant={variant}
                              {...getItemProps({ item })}
                            >
                              <strong>{toString(item)}</strong>
                            </Option>
                          </li>
                        )
                      })}
                  </OptionsWrapper>
                )}
              </SelectWrapper>
            </div>
          )
        }}
      />
    )
  }
}

export const SELECT_DEFAULT_OPTION_ELEMENT_WRAPPER =
  "SELECT_DEFAULT_OPTION_ELEMENT_WRAPPER"
export const DefaultOptionElementWrapper = styled.ul`
  position: absolute;
  width: 100%;
  list-style-type: none;
  padding: 0;
  margin: 0;
  border: 1px solid ${color.line};
  background-color: ${color.white};
  border-top-width: 0;
  z-index: 10;

  > *:not(:last-child) {
    border-bottom: 1px solid ${color.line};
  }
  ${themify(SELECT_DEFAULT_OPTION_ELEMENT_WRAPPER)};
`

export const SELECT_WRAPPER = "SELECT_WRAPPER"
export const SelectWrapper = styled.div`
  position: relative;
  ${themify(SELECT_WRAPPER)};
`

export const SELECTED_WRAPPER = "SELECTED_WRAPPER"
export const SelectedWrapper = styled.div`
  position: relative;
  padding-right: ${spacing.medium};
  ${p =>
    !p.combobox &&
    css`
      border: 1px solid ${color.line};
      border-radius: ${borderRadius};
    `};
  ${themify(SELECTED_WRAPPER)};
`
export const SELECT_ICON_BUTTON = "SELECT_ICON_BUTTON"
export const IconButton = styled.button`
  position: absolute;
  right: ${spacing.micro};
  bottom: 50%;
  width: ${targetSize.small};
  height: ${targetSize.small};
  border: 0;
  padding: 0 ${spacing.tiny};
  text-align: center;
  background-color: transparent;
  fill: ${color.wcag};
  transform: translateY(50%);
  transition: fill 0.2s ease;

  &:active,
  &:hover,
  &:focus {
    outline: none;

    svg {
      fill: ${color.primary};
    }
  }
  ${themify(SELECT_ICON_BUTTON)};
`

Select.propTypes = {
  Option: PropTypes.any,
  OptionsWrapper: PropTypes.any,
  Placeholder: PropTypes.any,
  Selected: PropTypes.any,
  children: PropTypes.func,
  className: PropTypes.string,
  combobox: PropTypes.bool,
  filterProp: PropTypes.string,
  itemToKey: PropTypes.any,
  itemToString: PropTypes.func,
  items: PropTypes.array.isRequired,
  label: PropTypes.string,
  mapKey: PropTypes.func,
  mapSelected: PropTypes.func,
  maxItems: PropTypes.number,
  onChange: PropTypes.func,
  placeHolderLabel: PropTypes.any,
  renderSelected: PropTypes.func,
  selectedItem: PropTypes.any,
  variant: PropTypes.string
}

Select.defaultProps = {
  Option: SelectOption,
  OptionsWrapper: DefaultOptionElementWrapper,
  Placeholder: Input,
  combobox: false,
  itemToKey: item => item,
  itemToString: item => item,
  maxItems: -1
}
export default Select
