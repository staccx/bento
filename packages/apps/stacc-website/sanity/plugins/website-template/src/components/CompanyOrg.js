import React from "react"
import PropTypes from "prop-types"
import { CompanyInput, BaseTheme } from "@staccx/base"
import { ThemeProxyProvider } from "@staccx/theme"
import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event"

const createPatchFrom = ({ organisasjonsnummer: orgNo, navn: name }) =>
  PatchEvent.from(set({ orgNo, name, orgType: "AS" }))

const mapItem = item => {
  if(!item) {
    return null
  }
  if (item.organisasjonsnummer) {
    return {
      name: item.navn,
      orgNo: item.organisasjonsnummer,
      orgType: "AS"
    }
  }
  return item
}

export default class CompanyOrg extends React.Component {
  static propTypes = {
    type: PropTypes.shape({
      title: PropTypes.string,
      options: PropTypes.shape({
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        step: PropTypes.number
      }).isRequired
    }).isRequired,
    value: PropTypes.object,
    onChange: PropTypes.func.isRequired
  }

  // this is called by the form builder whenever this input should receive focus
  focus() {
    this._inputElement.focus()
  }

  render() {
    const { type, value, onChange } = this.props

    console.log(value)
    const theme = {
      ...BaseTheme,
      global: "",
      reset: () => null
    }
    return (
      <div>
        <ThemeProxyProvider theme={theme}>
          <CompanyInput
            mapItem={mapItem}
            label={type.title}
            id={"orgNumber"}
            selected={value}
            onSelect={company => {
              if (company && company.organisasjonsnummer) {
                onChange(createPatchFrom(company))
              } else unset()
            }}
            ref={element => (this._inputElement = element)}
          />
        </ThemeProxyProvider>
      </div>
    )
  }
}
