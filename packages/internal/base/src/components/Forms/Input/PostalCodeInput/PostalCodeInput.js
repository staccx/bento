import React from "react"
import styled from "styled-components"
import Input, { InputPropTypes } from "../Input"
import { postalCodeMasks } from "../masks"
import Loading from "../../../DataViz/Loading/Loading"
import { spacing, targetSize, color, font, themify } from "@staccx/theme"
import { FadeIn } from "@staccx/animations"

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
    window
      .fetch(
        `https://fraktguide.bring.no/fraktguide/api/postalCode.json?country=no&pnr=${postalCode}`
      )
      .then(result => result.json())
      .then(place => this.setState({ place, isLoading: false }))
      .catch(() => this.setState({ isLoading: false }))
  }

  handleChange(e) {
    const { value } = e.target
    if (value && !isNaN(value)) {
      this.getPostalPlace(value)
    } else if (this.state.place) {
      this.setState({ place: null })
    }
  }

  render() {
    console.log(this.state.place)
    return (
      <PostalInputWrapper>
        <PostalInput
          type={"tel"}
          mask={postalCodeMasks[this.props.locale]}
          {...this.props}
          onChange={this.handleChange}
        />
        {this.state.isLoading && <Loading />}
        {this.state.place && (
          <Location valid={this.state.place.valid}>
            {this.state.place.result}
          </Location>
        )}
      </PostalInputWrapper>
    )
  }
}

export const POSTAL_WRAPPER = "POSTAL_WRAPPER"
const PostalInputWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  ${themify(POSTAL_WRAPPER)};
`

export const POSTAL_LOCATION = "POSTAL_LOCATION"
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
  ${themify(POSTAL_LOCATION)};
`

export const POSTAL_INPUT = "POSTAL_INPUT"
const PostalInput = styled(Input)`
  width: 5em;
  ${themify(POSTAL_INPUT)};
`

// TODO: debounce calls?
PostalCodeInput.propTypes = InputPropTypes

export default PostalCodeInput
