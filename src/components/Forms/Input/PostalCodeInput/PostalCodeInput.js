import React, { useState, useEffect, useRef } from "react"
import axios from "axios"
import styled from "styled-components"
import PropTypes from "prop-types"
import Input, { InputPropTypes } from "../Input"
import Loading from "../../../DataViz/Loading/Loading"
import { FadeIn } from "@staccx/animations"
import {
  applyVariants,
  spacing,
  targetSize,
  color,
  font
} from "../../../../theming"
import { themePropTypes } from "../../../../constants/themeContants"

const axiosInstance = axios.create({
  baseURL: `https://api.bring.com/shippingguide/api`
})

function getAxiosOptions() {
  const opt = {
    transformRequest: [
      function(data, headers) {
        delete headers.common.Authorization
        return data
      }
    ]
  }
  return opt
}

/**
 * Input for Norwegian Postal codes. Adds PostalPlace according to the number. Input is imported from Input-component
 */
const PostalCodeInput = ({ defaultValue, onChange, variant, ...restProps }) => {
  const [place, setPlace] = useState(null)
  const [postalCode, setPostalCode] = useState(defaultValue)
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef(null)

  const getPostalPlace = async () => {
    setIsLoading(true)
    try {
      const place = await axiosInstance
        .get(
          `/postalCode.json?clientUrl=${window.location.href}&pnr=${postalCode}`,
          getAxiosOptions()
        )
        .then(result => result.data)
      setPlace(place)
    } catch (e) {
      console.error(e)
    }

    setIsLoading(false)
  }

  const handleChange = e => {
    const { rawValue: value } = e.target
    setPostalCode(value)
  }

  useEffect(() => {
    if (postalCode && !isNaN(postalCode) && postalCode.length >= 4) {
      getPostalPlace(postalCode)
    } else {
      setPlace(null)
    }
  }, [postalCode])

  useEffect(() => {
    if (onChange) {
      onChange({ place, postalCode })
    }
  }, [place, postalCode])

  useEffect(() => {
    if (postalCode !== defaultValue) {
      setPostalCode(defaultValue)
      inputRef.current.setRawValue(defaultValue)
    }
  }, [defaultValue])

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
      {isLoading && <Loading />}
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

// TODO: debounce calls?
PostalCodeInput.propTypes = {
  ...InputPropTypes,
  locale: PropTypes.oneOf(["nb"]),
  onChange: PropTypes.func
}

PostalCodeInput.defaultProps = {
  locale: "nb"
}

export default PostalCodeInput