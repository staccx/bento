import React from "react"
import PropTypes from "prop-types"
import styled, { keyframes } from "styled-components"
import Input, { InputDefaultProps, InputPropTypes } from "../Input"
import axios from "axios"
import Downshift from "downshift"
import Flag from "../../../Layout/Flag/Flag"
import Label from "../../Label/Label"

class CompanyInput extends React.PureComponent {
  constructor(...args) {
    super(...args)

    this.timeout = null
    this.scheduleSearch = this.scheduleSearch.bind(this)

    this.state = {
      autoComplete: [],
      selected: null,
      isLoading: false
    }
  }

  componentWillMount() {
    if (this.props.selected) {
      this.setState({ selected: this.props.selected })
    }
  }

  componentWillUnmount() {
    if (this.cancelSource) {
      this.cancelSource.cancel()
    }
    clearTimeout(this.timeout)
    this.timeout = null
  }

  scheduleSearch = companyName => {
    clearTimeout(this.timeout)

    if (!companyName || companyName.length < 2) {
      this.setState({ autoComplete: [], isLoading: false })
      return
    }

    this.cancelSource = axios.CancelToken.source()
    this.setState({ isLoading: true })
    this.timeout = setTimeout(() => {
      const filter = `startswith(navn,'${companyName}')`
      axios
        .get(`http://data.brreg.no/enhetsregisteret/enhet.json?page=${0}&size=${5}&$filter=${filter}`, {
          cancelToken: this.cancelSource.token
        })
        .then(result => result.data) // Axios data
        .then(result => result.data) // Brreg data
        .then(companies => {
          console.log(companies)
          this.setState({
            autoComplete: companies,
            isLoading: false
          })
        })
        .catch(() => this.setState({ autoComplete: [], isLoading: false }))
    }, this.props.searchTimeout)
  }

  handleChange = e => {
    const value = e.target.value
    if (this.props.onChange) {
      this.props.onChange(e)
    }
    this.scheduleSearch(value)
  }
  handleSelect = selected => {
    console.log(selected)
    this.setState({ selected }, () => {
      if (this.props.onSelect) {
        this.props.onSelect(selected)
      }
    })
  }

  render() {
    const { onChange, ...otherProps } = this.props

    const { autoComplete, selected, isLoading } = this.state
    return (
      <Downshift
        onSelect={this.handleSelect}
        itemToString={item => (item ? item.name : "")}
        defaultIsOpen={true}
        render={({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue,
          selectedItem,
          highlightedIndex
        }) => {
          return (
            <div>
              {selected && (
                <ModifiedFlag
                  reverse
                  img={
                    <Close
                      type="button"
                      onClick={() =>
                        this.setState({ selected: null, autoComplete: [] })
                      }
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
                  <Label htmlFor="SelectedName">Bedrift</Label>
                  <div id="SelectedName">{selected.navn}</div>
                  <OrgNo>{selected.organisasjonsnummer}</OrgNo>
                </ModifiedFlag>
              )}
              {!selected && (
                <React.Fragment>
                  <Input
                    {...getInputProps({ ...otherProps })}
                    onChange={this.handleChange}
                  />
                  {isLoading && (
                    <SelectWrapper>
                      <SelectLoad />
                    </SelectWrapper>
                  )}
                  {autoComplete.length ? (
                    <SelectWrapper>
                      <SelectList>
                        {autoComplete.map((item, index) => (
                          <SelectItem
                            {...getItemProps({ item })}
                            key={item.organisasjonsnummer}
                            isSelected={highlightedIndex === index}
                          >
                            {`${item.navn}${
                              item.orgform.kode !== "AS" ? " - " + item.orgform.kode : ""
                            }`}
                            <OrgNo>{item.organisasjonsnummer}</OrgNo>
                          </SelectItem>
                        ))}
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

const Load = keyframes`
  from {
    background-color: #F7F7FF;
  }

  to {
    background-color: #188EFB;
  }
`

const SelectLoad = styled.div`
  background-color: ${p => p.theme.color.white};
  animation: 0.8s ${Load} ease-in-out infinite alternate;
  height: ${p => p.theme.spacing.tiny};
  width: 100%;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  z-index: 10;
  box-shadow: 0px ${p => p.theme.spacing.small} ${p => p.theme.spacing.medium}
    rgba(0, 0, 0, 0.06);
`

const Close = styled.button`
  border-width: 0;
  background-color: transparent;
  color: ${p => p.theme.color.primary};
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    outline: none;
    color: ${p => p.theme.color.text};
  }
  svg {
    width: ${p => p.theme.spacing.medium};
  }
`

const ModifiedFlag = styled(Flag)`
  padding: ${p => p.theme.spacing.tiny} ${p => p.theme.spacing.tiny}
    ${p => p.theme.spacing.tiny} ${p => p.theme.spacing.medium};
  position: relative;
`

const OrgNo = styled.div`
  font-size: ${p => p.theme.font.size.tiny};
  color: ${p => p.theme.color.wcag};
`

const SelectWrapper = styled.div`
  position: relative;
`

const SelectList = styled.ul`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  background: ${p => p.theme.color.white};
  box-shadow: 0px ${p => p.theme.spacing.small} ${p => p.theme.spacing.medium}
    rgba(0, 0, 0, 0.06);
`

const SelectItem = styled.li`
  list-style: none;
  padding: ${p => p.theme.spacing.small} ${p => p.theme.spacing.medium};
  background-color: ${p => (p.isSelected ? p.theme.color.primary : "transparent")};
  color: ${p => (p.isSelected ? p.theme.color.white : p.theme.color.black)};
  border-bottom: 1px solid ${p => p.theme.color.line};

  ${OrgNo} {
    color: ${p => (p.isSelected ? p.theme.color.white : p.theme.color.wcag)};
  }

  &:first-child {
    border-top: 1px solid ${p => p.theme.color.line};
  }
`

CompanyInput.propTypes = {
  searchTimeout: PropTypes.number,
  onSelect: PropTypes.func,
  selected: PropTypes.object,
  ...InputPropTypes
}

CompanyInput.defaultProps = {
  searchTimeout: 200,
  onSelect: null,
  selected: null,
  ...InputDefaultProps
}

export default CompanyInput
