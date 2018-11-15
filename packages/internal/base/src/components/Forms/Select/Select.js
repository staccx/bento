import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { stringIncludes } from "@staccx/utils"
import Label from "../Label/Label"
import Input from "../Input/Input"
import Caret from "../../Icons/Caret"
import SelectOption from "./Select.Option"
import Select2 from "./Select2"
import ThemeComponent from "../../Theme/ThemeComponent"
import {
  applyVariants,
  color,
  spacing,
  targetSize,
  borderRadius
} from "../../../theming"
import themeProps from "./Select.themeProps"

const CaretComp = ({ ...props }) => (
  <ThemeComponent
    tagName={themeProps.iconComponent}
    fallback={Caret}
    {...props}
  />
)

const CaretIcon = styled(CaretComp)`
  transition: transform 0.3s ease-out;
  transform: ${p => (p.isExpanded ? "rotate(180deg)" : "rotate(0)")};
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
      variant
    } = this.props

    const OptionsWrapper = this.props.OptionsWrapper
    const Option = this.props.Option
    const Selected = this.props.Selected || Option

    const toString = item => {
      if (!item) {
        return ""
      }
      if (!placeHolderLabel || item !== placeHolderLabel) {
        return itemToString(item)
      }

      return placeHolderLabel
    }

    const renderSelected = (selectedItem, getToggleButtonProps, { isOpen }) => (
      <SelectWrapper className={className} variant={variant}>
        {this.props.label && (
          <Label variant={variant}>{this.props.label}</Label>
        )}
        <SelectedWrapper variant={variant} isSelected>
          {this.props.renderSelected ? (
            this.props.renderSelected({
              selectedItem,
              getToggleButtonProps
            })
          ) : (
            <React.Fragment>
              <Selected
                {...getToggleButtonProps()}
                selectedItem={selectedItem}
                variant={variant}
                isSelected
              >
                {toString(selectedItem)}
              </Selected>
              <IconButton
                {...getToggleButtonProps()}
                variant={variant}
                type={"button"}
                tabIndex={-1}
                isSelected
              >
                <CaretIcon isExpanded={isOpen} variant={variant} />
              </IconButton>
            </React.Fragment>
          )}
        </SelectedWrapper>
      </SelectWrapper>
    )

    const renderPlaceholder = getToggleButtonProps => (
      <SelectWrapper className={className} variant={variant}>
        {this.props.label && (
          <Label variant={variant}>{this.props.label}</Label>
        )}
        <SelectedWrapper variant={variant} isSelected>
          <Selected
            {...getToggleButtonProps()}
            selectedItem={placeHolderLabel}
            variant={variant}
            isSelected
          >
            {toString(placeHolderLabel)}
          </Selected>
          <IconButton
            {...getToggleButtonProps()}
            variant={variant}
            type={"button"}
            isSelected
            tabIndex={-1}
          >
            <CaretIcon isExpanded={false} variant={variant} />
          </IconButton>
        </SelectedWrapper>
      </SelectWrapper>
    )

    return (
      <Select2
        options={this.props.items}
        renderSelected={renderSelected}
        renderPlaceholder={renderPlaceholder}
        renderLabel={() => null}
        onChange={onChange}
      >
        {({
          options,
          getItemProps,
          selectedItem,
          highlightedIndex,
          toggleMenu
        }) => (
          <OptionsWrapper variant={variant}>
            {options
              .filter(item => (selectedItem ? item : this.filterItem(item)))
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
                    reset: toggleMenu
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
      </Select2>
    )
  }
}

export const DefaultOptionElementWrapper = styled.ul`
  position: absolute;
  max-height: 300px;
  overflow: auto;
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
  ${applyVariants(themeProps.defaultOptionWrapper)};
`

export const SelectWrapper = styled.div`
  position: relative;
  ${applyVariants(themeProps.selectWrapper)};
`

export const SelectedWrapper = styled.div`
  position: relative;

  ${p =>
    !p.combobox &&
    css`
      border: 1px solid ${color.line};
      border-radius: ${borderRadius};
    `};
  ${applyVariants(themeProps.selectedWrapper)};
`
export const IconButton = styled.button`
  position: absolute;
  right: 3px;
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
  ${applyVariants(themeProps.iconButton)};
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

Select.themeProps = themeProps
export default Select
