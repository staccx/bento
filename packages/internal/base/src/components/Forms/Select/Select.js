import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Downshift from "downshift"
import { multiplyPixelValue } from "@staccx/math"
import { ScaleIn } from "@staccx/animations"
import Label from "../Label/Label"
import Input from "../Input/Input"
import Caret from "../../Icons/Caret"
import Close from "../../Icons/Close"
import {
  color,
  spacing,
  targetSize,
  ThemeComponent,
  themify
} from "@staccx/theme"
import SelectOption from "./Select.Option"

export const SELECT_DEFAULT_OPTION_ELEMENT_WRAPPER =
  "SELECT_DEFAULT_OPTION_ELEMENT_WRAPPER"
export const DefaultOptionElementWrapper = styled.div`
  position: absolute;
  width: 100%;
  border: 1px solid ${color.line};
  background-color: ${color.white};
  border-top-width: 0;,
  ${themify(SELECT_DEFAULT_OPTION_ELEMENT_WRAPPER)}
`

export const SELECT_WRAPPER = "SELECT_WRAPPER"
export const SelectWrapper = styled.div`
  position: relative;
  ${themify(SELECT_WRAPPER)};
`

export const SELECTED_WRAPPER = "SELECT_WRAPPER"
export const SelectedWrapper = styled.div`
  position: relative;
  ${themify(SELECTED_WRAPPER)};
`
export const SELECT_ICON_BUTTON = "SELECT_ICON_BUTTON"
export const IconButton = styled.button`
  position: absolute;
  right: ${spacing.micro};
  bottom: ${p => {
    const value = targetSize.normal()(p)
    return multiplyPixelValue(value, 0.5)
  }};
  width: ${targetSize.small};
  height: ${targetSize.small};
  border: 0;
  padding: 0 ${spacing.tiny};
  text-align: center;
  background-color: transparent;
  fill: ${color.gray};
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
const CloseIcon = styled(CloseComp)`
  transform: scale(0);
  animation: ${ScaleIn} 0.3s ease-in forwards 1;
`

class Select extends React.PureComponent {
  constructor(props, context) {
    super(props, context)
    this.state = {
      defaultSelectedItem: !this.props.combobox ? this.props.items[0] : null,
      filter: null,
      selected: this.props.selectedItem
        ? this.props.selectedItem
        : !this.props.combobox
          ? this.props.items[0]
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
    return filter ? field.includes(filter) : true
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

    if (this.props.mapKey) {
      console.log(this.props.mapSelected)
    }
    return (
      <Downshift
        onChange={onChange}
        itemToString={itemToString}
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
                  <SelectedWrapper variant={variant}>
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
                      >
                        {itemToString(selectedItem)}
                      </Selected>
                    )}
                    {this.props.combobox ? (
                      <IconButton
                        onClick={() => clearSelection()}
                        variant={variant}
                      >
                        <CloseIcon variant={variant} />
                      </IconButton>
                    ) : (
                      <IconButton
                        onClick={() => toggleMenu()}
                        variant={variant}
                      >
                        <CaretIcon isExpanded={isOpen} variant={variant} />
                      </IconButton>
                    )}
                  </SelectedWrapper>
                ) : (
                  <SelectedWrapper variant={variant}>
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
                      .map((item, index) => {
                        if (this.props.children) {
                          return this.props.children({
                            item,
                            getItemProps,
                            highlighted: highlightedIndex === index,
                            selected: selectedItem === item
                          })
                        }
                        return (
                          <Option
                            key={this.props.itemToKey(item)}
                            data={item}
                            {...getItemProps({ item })}
                          >
                            <strong>
                              {itemToString ? itemToString(item) : item}
                            </strong>
                          </Option>
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

Select.propTypes = {
  Option: PropTypes.any,
  OptionsWrapper: PropTypes.any,
  Placeholder: PropTypes.any,
  Selected: PropTypes.any,
  children: PropTypes.func,
  className: PropTypes.string,
  combobox: PropTypes.bool,
  defaultSelectedItem: PropTypes.any,
  filterProp: PropTypes.string,
  itemToKey: PropTypes.any,
  itemToString: PropTypes.func,
  items: PropTypes.array.isRequired,
  label: PropTypes.string,
  mapKey: PropTypes.func,
  mapSelected: PropTypes.func,
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
  defaultSelectedItem: null,
  itemToKey: item => item,
  itemToString: item => item
}
export default Select
