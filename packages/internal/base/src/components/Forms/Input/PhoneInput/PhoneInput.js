import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import Input, { InputPropTypes } from "../Input"
import "cleave.js/dist/addons/cleave-phone.no.js"
import {
  applyVariants,
  themePropTypes,
  spacing,
  color,
  font
} from "../../../../theming"

const inputStyling = css`
  padding-left: ${spacing.large};
`
/**
 * Input for Phone-numbers.
 * TODO: normalize country code and locale
 */
const PhoneInput = React.forwardRef(
  ({ locale, countryCode, ...otherProps }, ref) => (
    <PhoneInputWrapper {...otherProps}>
      {countryCode && <CountryCode {...otherProps}>{countryCode}</CountryCode>}
      <PInput
        type={"tel"}
        ref={ref}
        options={{
          phone: true,
          phoneRegionCode: locale
        }}
        countryCode={countryCode}
        additionalCSS={inputStyling}
        {...otherProps}
      />
    </PhoneInputWrapper>
  )
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
  width: 100%;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  ${applyVariants(PhoneInput.themeProps.wrapper)};
`

const CountryCode = styled.div`
  color: ${color.gray};
  font-size: ${font.input};
  user-select: none;
  position: absolute;
  z-index: 1;
  margin-left: ${spacing.small};
  transform: translateY(-40%);
`

const PInput = styled(Input)`
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
