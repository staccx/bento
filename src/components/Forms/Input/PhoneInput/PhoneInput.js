import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Input, { InputPropTypes } from "../Input"
import "cleave.js/dist/addons/cleave-phone.no.js"
import { applyVariants, spacing } from "../../../../theming"
import countries, { NORWAY } from "./countries"
import SelectSimple from "../../SelectSimple/SelectSimple"
import Label from "../../Label/Label"
import themeProps from "./PhoneInput.themeProps"
import { componentCreateFactory } from "../../../../theming/utils/createVariantsFunctionFactory"

/**
 * Input for Phone-numbers.
 * TODO: normalize country code and locale
 */

const PhoneInput = React.forwardRef(
  (
    {
      locale,
      label,
      showCountryCode = false,
      initialCountry = NORWAY,
      initialCountryCode = NORWAY.code,
      onCountryChange,
      ...otherProps
    },
    ref
  ) => {
    return (
      <PhoneInputWrapper {...otherProps}>
        <Label htmlFor="test" {...otherProps}>
          {label}
        </Label>
        <Wrap {...otherProps}>
          {showCountryCode && (
            <CountryCode>
              <SelectSimple
                {...otherProps}
                items={countries}
                itemToString={item => `+${item.code}`}
                itemToKey={item => item.code}
                initialSelectedItem={
                  initialCountryCode
                    ? countries.find(c => c.code === initialCountryCode)
                    : initialCountry
                }
                onChange={country => {
                  if (onCountryChange) {
                    onCountryChange(country)
                  }
                }}
              >
                {countries.map(country => (
                  <option key={country.code}>{country.code}</option>
                ))}
              </SelectSimple>
            </CountryCode>
          )}
          <PInput
            id="test"
            type="tel"
            ref={ref}
            options={{
              phone: true,
              phoneRegionCode: locale
            }}
            {...otherProps}
          />
        </Wrap>
      </PhoneInputWrapper>
    )
  }
)

const PhoneInputWrapper = styled.div`
  position: relative;
`

const Wrap = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  ${applyVariants(themeProps.wrapper)};
`

const CountryCode = styled.div`
  flex-grow: 0.3;
  margin-right: ${spacing.small};
`

const PInput = styled(Input)`
  flex-grow: 1;
  ${applyVariants(themeProps.input)};
`

PhoneInput.propTypes = {
  ...InputPropTypes,
  locale: PropTypes.oneOf(["no"]),
  onChange: PropTypes.func,
  guide: PropTypes.bool,
  id: PropTypes.string.isRequired
}

PhoneInput.defaultProps = {
  locale: "no",
  guide: false
}
PhoneInput.themeProps = themeProps
PhoneInput.createVariants = componentCreateFactory(PhoneInput)

export default PhoneInput
