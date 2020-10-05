import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Input from "../Input"
import Loading from "../../../Loaders/Loading/Loading"
import { FadeIn } from "../../../../animations"
import {
  applyVariants,
  spacing,
  targetSize,
  color,
  font
} from "../../../../theming"
import { usePostalCode } from "../../../../hooks"
import Alert from "../../../Alert/Alert"
import themeProps from "./PostalCode.themeProps"
import { componentCreateFactory } from "../../../../theming/utils/createVariantsFunctionFactory"

/**
 * Input for Norwegian Postal codes. Adds PostalPlace according to the number. Input is imported from Input-component
 * @deprecated Use <Input mode="postal" />
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
        type="text"
        pattern={"[0-9]{4}"}
        options={{ blocks: [4] }}
        defaultValue={defaultValue}
        variant={variant}
        {...restProps}
        onChange={handleChange}
        ref={inputRef}
      />
      {error && <Alert type="warning">Error</Alert>}
      {!place && input?.length && <Loading />}
      {place && (
        <Location valid={place.valid} variant={variant}>
          {place.result}
        </Location>
      )}
    </PostalInputWrapper>
  )
}

const PostalInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  ${applyVariants(themeProps.wrapper)};
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
  ${applyVariants(themeProps.location)};
`

const PostalInput = styled(Input)`
  width: 5em;
  ${applyVariants(themeProps.input)};
`

PostalCodeInput.propTypes = {
  locale: PropTypes.oneOf(["nb"]),
  onChange: PropTypes.func
}

PostalCodeInput.defaultProps = {
  locale: "nb"
}
PostalCodeInput.themeProps = themeProps
PostalCodeInput.createVariants = componentCreateFactory(PostalCodeInput)

export default PostalCodeInput
