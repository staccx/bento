import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { color, font, spacing, themify } from '@staccx/theme'
import Input, { InputDefaultProps, InputPropTypes } from '../Input'
import Downshift from 'downshift'
import Flag from '../../../Layout/Flag/Flag'
import Label from '../../Label/Label'

const defaultMapItem = item => {
  if (!item) {
    return null
  }
  return {
    name: item.navn,
    orgNo: item.organisasjonsnummer,
    orgType: item.orgform.kode
  }
}

class CompanyInput extends React.PureComponent {
  constructor (...args) {
    super(...args)

    this.timeout = null
    this.scheduleSearch = this.scheduleSearch.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.state = {
      autoComplete: [],
      searchText: "",
      selected: null,
      isLoading: false
    }
  }

  componentWillMount () {
    if (this.props.selected) {
      this.setState({selected: this.props.selected})
    }
  }

  componentWillUnmount () {
    clearTimeout(this.timeout)
    this.timeout = null
  }

  scheduleSearch (companyName) {
    clearTimeout(this.timeout)
    this.setState({searchText: companyName})
    if (!companyName || companyName.length < 2) {
      this.setState({autoComplete: [], isLoading: false})
      return
    }

    this.setState({isLoading: true})
    this.timeout = setTimeout(() => {
      const filter = `startswith(navn,'${companyName}')`

      const search = this.props.onSearch ? this.props.onSearch :
        () =>
          window
            .fetch(
              `http://data.brreg.no/enhetsregisteret/enhet.json?page=${0}&size=${5}&$filter=${filter}`
            )
            .then(result => result.json())
            .then(json => json.data)

      search(companyName).then(companies => {
        this.setState({
          autoComplete: companies,
          isLoading: false
        })
      })
        .catch(() => this.setState({autoComplete: [], isLoading: false}))
    }, this.props.searchTimeout)
  }

  handleChange (e) {
    const value = e.target.value
    if (this.props.onChange) {
      this.props.onChange(e)
    }
    this.scheduleSearch(value)
  }

  handleSelect (selected) {
    this.setState({selected}, () => {
      if (this.props.onSelect) {
        this.props.onSelect(selected)
      }
    })
  }

  render () {
    const {onChange, selectedHeader, mapItem, ...otherProps} = this.props

    const {autoComplete, selected, isLoading, searchText} = this.state
    return (
      <Downshift
        onSelect={this.handleSelect}
        itemToString={item => (item ? item.name : '')}
        defaultIsOpen
        render={({
                   getInputProps,
                   getItemProps,
                   isOpen,
                   inputValue,
                   selectedItem,
                   highlightedIndex
                 }) => {
          const sel = mapItem(selected)
          return (
            <div>
              {sel && <ModifiedFlag
                reverse
                img={
                  <Close
                    type="button"
                    onClick={() => this.setState({selected: null, autoComplete: []})}
                  >
                    <svg viewBox="0 0 26 26" width="50" height="50">
                      <path
                        fill="currentColor"
                        d="M21.7344 19.6406l-2.0977 2.0938c-.3828.3867-1.0078.3867-1.3945 0L13 16.496l-5.2383 5.2383c-.3867.3867-1.0156.3867-1.3984 0l-2.0977-2.0938a.9878.9878 0 0 1 0-1.3984L9.504 13 4.2656 7.7617c-.3828-.3906-.3828-1.0195 0-1.3984l2.0977-2.0977c.3828-.3867 1.0117-.3867 1.3984 0L13 9.5078l5.2422-5.2422c.3867-.3867 1.0156-.3867 1.3945 0l2.0977 2.0938c.3867.3867.3867 1.0156.0039 1.4023L16.496 13l5.2383 5.2422a.9878.9878 0 0 1 0 1.3984z"
                      />
                    </svg>
                  </Close>
                }
              >
                <SelectLabel htmlFor="SelectedName">{selectedHeader}</SelectLabel>
                <div id="SelectedName">{sel.name}</div>
                <OrgNo>{sel.orgNo}</OrgNo>
              </ModifiedFlag>}
              {!selected && (
                <React.Fragment>
                  <Input
                    {...getInputProps({...otherProps})}
                    value={searchText}
                    onChange={this.handleChange}
                  />
                  {isLoading && (
                    <SelectWrapper>
                      <SelectLoad/>
                    </SelectWrapper>
                  )}
                  {autoComplete.length ? (
                    <SelectWrapper>
                      <SelectList>
                        {autoComplete.map((item, index) => {
                          const mappedItem = mapItem(item)
                          return (
                            <SelectItem
                              {...getItemProps({item})}
                              key={mappedItem.orgNo}
                              isSelected={highlightedIndex === index}
                            >
                              {`${mappedItem.name}${
                                mappedItem.orgType !== 'AS'
                                  ? ' - ' + mappedItem.orgType
                                  : ''
                                }`}
                              <OrgNo>{mappedItem.orgNo}</OrgNo>
                            </SelectItem>
                          )
                        })}
                      </SelectList>
                    </SelectWrapper>
                  ) : null}
                </React.Fragment>
              )}
            </div>
          )
        }}
      />
    )
  }
}

export const COMPANY_INPUT_LOAD_FROM = 'COMPANY_INPUT_LOAD_FROM'
export const COMPANY_INPUT_LOAD_TO = 'COMPANY_INPUT_LOAD_TO'

const Load = props => keyframes`
  from {
    background-color: ${color.bg()(props)};
    ${themify(COMPANY_INPUT_LOAD_FROM)}
  }

  to {
    background-color: ${color.primary()(props)};
    ${themify(COMPANY_INPUT_LOAD_TO)}
  }
`

export const COMPANY_INPUT_LABEL = 'COMPANY_INPUT_LABEL'
const SelectLabel = styled(Label)`
  ${themify(COMPANY_INPUT_LABEL)};
`

export const COMPANY_INPUT_SELECT_LOAD = 'COMPANY_INPUT_SELECT_LOAD'
const SelectLoad = styled.div`
  background-color: ${color.white};
  animation: 0.8s ${Load} ease-in-out infinite alternate;
  height: ${spacing.tiny};
  width: 100%;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  z-index: 10;
  box-shadow: 0px ${spacing.small} ${spacing.medium} rgba(0, 0, 0, 0.06);
  ${themify(COMPANY_INPUT_SELECT_LOAD)};
`

export const COMPANY_INPUT_SELECT_CLOSE = 'COMPANY_INPUT_SELECT_CLOSE'
const Close = styled.button`
  border-width: 0;
  background-color: transparent;
  color: ${color.primary};
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    outline: none;
    color: ${color.text};
  }
  svg {
    width: ${spacing.medium};
  }
  ${themify(COMPANY_INPUT_SELECT_CLOSE)};
`
export const COMPANY_INPUT_FLAG = 'COMPANY_INPUT_FLAG'
const ModifiedFlag = styled(Flag)`
  padding: ${spacing.tiny} ${spacing.tiny} ${spacing.tiny} ${spacing.medium};
  position: relative;
  ${themify(COMPANY_INPUT_FLAG)};
`

export const COMPANY_INPUT_ORG_NO = 'COMPANY_INPUT_ORG_NO'
const OrgNo = styled.div`
  font-size: ${font.tiny};
  color: ${color.wcag};
  ${themify(COMPANY_INPUT_ORG_NO)};
`

export const COMPANY_INPUT_SELECT_WRAPPER = 'COMPANY_INPUT_SELECT_WRAPPER'
const SelectWrapper = styled.div`
  position: relative;
  ${themify(COMPANY_INPUT_SELECT_WRAPPER)};
`
export const COMPANY_INPUT_SELECT_LIST = 'COMPANY_INPUT_SELECT_LIST'
const SelectList = styled.ul`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  background: ${color.white};
  box-shadow: 0px ${spacing.small()} ${spacing.medium()} rgba(0, 0, 0, 0.06);
  ${themify(COMPANY_INPUT_SELECT_LIST)};
`

export const COMPANY_INPUT_SELECT_ITEM = 'COMPANY_INPUT_SELECT_ITEM'
const SelectItem = styled.li`
  list-style: none;
  padding: ${spacing.small()} ${spacing.medium()};
  background-color: ${p => (p.isSelected ? color.primary : 'transparent')};
  color: ${p => (p.isSelected ? color.white : color.black)};
  border-bottom: 1px solid ${color.line};

  ${OrgNo} {
    color: ${p => (p.isSelected ? color.white : color.wcag)};
  }

  &:first-child {
    border-top: 1px solid ${color.line};
  }
  ${themify(COMPANY_INPUT_SELECT_ITEM)};
`

CompanyInput.propTypes = {
  searchTimeout: PropTypes.number,
  onSelect: PropTypes.func,
  selected: PropTypes.object,
  onSearch: PropTypes.func,
  mapItem: PropTypes.func,
  selectedHeader: PropTypes.string,
  ...InputPropTypes
}

CompanyInput.defaultProps = {
  searchTimeout: 200,
  onSelect: null,
  selected: null,
  onInputChange: null,
  mapItem: defaultMapItem,
  selectedHeader: "Bedrift",
  ...InputDefaultProps
}

export default CompanyInput
