import React from "react"
import Input from "../Input"

class CreditCardInput extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.input = React.createRef()
  }

  render() {
    return (
      <Input
        id="creditCard"
        ref={this.input}
        options={{
          creditCard: true,
          onCreditCardTypeChanged: console.log
        }}
        {...this.props}
      />
    )
  }
}

CreditCardInput.propTypes = {}
export default CreditCardInput
