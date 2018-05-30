import React from "react"
import Input, { InputPropTypes } from "../Input"
import { postalCodeMasks } from "../masks"

class PostalCodeInput extends React.PureComponent {
  constructor(props, context) {
    super(props, context)

    this.state = {
      place: null
    }
  }

  render() {
    return (
      <div>
        <Input
          type={"tel"}
          mask={postalCodeMasks[this.props.locale]}
          {...this.props}
        />
      </div>
    )
  }
}

PostalCodeInput.propTypes = InputPropTypes

export default PostalCodeInput
