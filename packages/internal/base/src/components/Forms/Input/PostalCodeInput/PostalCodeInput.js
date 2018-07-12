import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Input, { InputPropTypes } from "../Input"
import { postalCodeMasks } from "../masks"
import Loading from "../../../DataViz/Loading/Loading"
import { spacing, targetSize, color, font, themify } from "@staccx/theme"
import { FadeIn } from "@staccx/animations"
import themePropTypes from "../../../constants/themePropTypes"

/**
 * Input for Norwegian Postal codes. Adds PostalPlace according to the number. Input is imported from Input-component
 */
class PostalCodeInput extends React.PureComponent {
  constructor(props, context) {
    super(props, context)

    this.state = {
      place: null,
      isLoading: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.getPostalPlace = this.getPostalPlace.bind(this)
  }

  getPostalPlace(postalCode) {
    this.setState({ isLoading: true })
    return window
      .fetch(
        `https://fraktguide.bring.no/fraktguide/api/postalCode.json?country=no&pnr=${postalCode}`
      )
      .then(result => result.json())
      .then(
        place =>
          new Promise(resolve =>
            this.setState({ place, postalCode, isLoading: false }, resolve)
          )
      )
      .catch(() => this.setState({ isLoading: false }))
  }

  handleChange(e) {
    const { value } = e.target
    if (value && !isNaN(value)) {
      this.getPostalPlace(value).then(() => {
        if (this.props.onChange) {
          this.props.onChange(this.state)
        }
      })
    } else if (this.state.place) {
      this.setState({ place: null })
    }
  }

  render() {
    return (
      <PostalInputWrapper variant={this.props.variant}>
        <PostalInput
          type={"tel"}
          mask={postalCodeMasks[this.props.locale]}
          {...this.props}
          onChange={this.handleChange}
        />
        {this.state.isLoading && <Loading />}
        {this.state.place && (
          <Location valid={this.state.place.valid} variant={this.props.variant}>
            {this.state.place.result}
          </Location>
        )}
      </PostalInputWrapper>
    )
  }
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
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  ${themify(PostalCodeInput.themeProps.wrapper)};
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
  ${themify(PostalCodeInput.themeProps.location)};
`

const PostalInput = styled(Input)`
  width: 5em;
  ${themify(PostalCodeInput.themeProps.input)};
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
