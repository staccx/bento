import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Input, { InputPropTypes } from "../Input"
import "cleave.js/dist/addons/cleave-phone.no.js"
import { applyVariants, spacing, themePropTypes } from "../../../../theming"
import countries, { NORWAY } from "../../../../data/countries"
import Select from "../../Select/Select"
import Label from "../../Label/Label"

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
      onCountryChange,
      variant,
      ...otherProps
    },
    ref
  ) => {
    return (
      <PhoneInputWrapper {...otherProps} variant={variant}>
        <Label variant={variant}>{label}</Label>
        <Wrap>
          {showCountryCode && (
            <CountryCode>
              <Select
                {...otherProps}
                items={countries}
                itemToString={item => `+${item.code}`}
                itemToKey={item => item.code}
                initialSelectedItem={initialCountry}
                onChange={country => {
                  if (onCountryChange) {
                    onCountryChange(country)
                  }
                }}
                variant={variant}
              />
            </CountryCode>
          )}
          <PInput
            type={"tel"}
            ref={ref}
            options={{
              phone: true,
              phoneRegionCode: locale
            }}
            variant={variant}
            {...otherProps}
          />
        </Wrap>
      </PhoneInputWrapper>
    )
  }
)

PhoneInput.themeProps = {
  wrapper: {
    name: "PHONE_WRAPPER",
    description: "Wrapper style",
    type: themePropTypes.style
  },
  countryCode: {
    name: "PHONE_COUNTRY_CODE",
    description: "Country code style",
    type: themePropTypes.style
  },
  input: {
    name: "PHONE_INPUT",
    description: "Specific Input style",
    type: themePropTypes.style
  }
}

const PhoneInputWrapper = styled.div`
  position: relative;
`

const Wrap = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  ${applyVariants(PhoneInput.themeProps.wrapper)};
`

const CountryCode = styled.div`
  flex-grow: 0.3;
  margin-right: ${spacing.small};
`

const PInput = styled(Input)`
  flex-grow: 1;
  ${applyVariants(PhoneInput.themeProps.input)};
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

export default PhoneInput
