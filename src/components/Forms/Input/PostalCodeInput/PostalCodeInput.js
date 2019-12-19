import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Input, { InputPropTypes } from "../Input"
import Loading from "../../../DataViz/Loading/Loading"
import { FadeIn } from "../../../../animations"
import {
  applyVariants,
  spacing,
  targetSize,
  color,
  font
} from "../../../../theming"
import { themePropTypes } from "../../../../constants/themeContants"
import { usePostalCode } from "../../../../hooks/usePostalCode/usePostalCode"
import Alert from "../../../Alert/Alert"

/**
 * Input for Norwegian Postal codes. Adds PostalPlace according to the number. Input is imported from Input-component
 */
const PostalCodeInput = ({ defaultValue, onChange, variant, ...restProps }) => {
  const inputRef = useRef(null)
  const [input, setInput] = useState(defaultValue)
  const [place, error] = usePostalCode(input)

  const handleChange = e => {
    const { rawValue: value } = e.target
    setInput(value)
  }

  useEffect(() => {
    if (inputRef.current && defaultValue) {
      inputRef.current.setRawValue(defaultValue)
    }
  }, [inputRef, defaultValue])

  return (
    <PostalInputWrapper variant={variant}>
      <PostalInput
        type={"text"}
        pattern={"[0-9]{4}"}
        options={{ blocks: [4] }}
        defaultValue={defaultValue}
        variant={variant}
        {...restProps}
        onChange={handleChange}
        ref={inputRef}
      />
      {error && <Alert type={"warning"}>Error</Alert>}
      {!place && input?.length && <Loading />}
      {place && (
        <Location valid={place.valid} variant={variant}>
          {place.result}
        </Location>
      )}
    </PostalInputWrapper>
  )
}

PostalCodeInput.themeProps = {
  wrapper: {
    name: "POSTAL_WRAPPER",
    description: "Wrapper style",
    type: themePropTypes.style
  },
  location: {
    name: "POSTAL_LOCATION",
    description: "Location style",
    type: themePropTypes.style
  },
  input: {
    name: "POSTAL_INPUT",
    description: "Specific Input style",
    type: themePropTypes.style
  }
}

const PostalInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  ${applyVariants(PostalCodeInput.themeProps.wrapper)};
`

const Location = styled.div`
  padding-left: ${spacing.small};
  min-height: ${targetSize.normal};
  align-items: center;
  vertical-align: middle;
  display: flex;
  font-size: ${font.input};
  color: ${p => (p.valid ? color("wcag")(p) : color("warning")(p))};
  opacity: 0;
  animation: ${FadeIn} 0.8s ease-out forwards 1;
  ${applyVariants(PostalCodeInput.themeProps.location)};
`

const PostalInput = styled(Input)`
  width: 5em;
  ${applyVariants(PostalCodeInput.themeProps.input)};
`

PostalCodeInput.propTypes = {
  ...InputPropTypes,
  locale: PropTypes.oneOf(["nb"]),
  onChange: PropTypes.func
}

PostalCodeInput.defaultProps = {
  locale: "nb"
}

export default PostalCodeInput
