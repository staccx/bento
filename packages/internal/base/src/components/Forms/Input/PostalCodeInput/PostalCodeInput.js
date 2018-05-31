import React from "react"
import Input, { InputPropTypes } from "../Input"
import { postalCodeMasks } from "../masks"

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
    if (value && value.length === 4) {
      this.getPostalPlace(value)
    } else if (this.state.place) {
      this.setState({ place: null })
    }
  }

  render() {
    return (
      <div>
        <Input
          type={"tel"}
          mask={postalCodeMasks[this.props.locale]}
          {...this.props}
          onChange={this.handleChange}
        />
        {this.state.isLoading && <span>leter...</span>}
        {this.state.place && <span>{this.state.place.result}</span>}
      </div>
    )
  }
}

// TODO: themify
// TODO: debounce calls?
PostalCodeInput.propTypes = InputPropTypes

export default PostalCodeInput
