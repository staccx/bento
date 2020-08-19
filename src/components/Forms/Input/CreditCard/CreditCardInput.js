import React from "react"
import Input from "../Input"

/**
 * This components controlls user input so that they can only enter numbers with the format of a creditcard number
 */
const CreditCardInput = React.forwardRef((props, ref) => (
  <Input
    id="creditCard"
    ref={ref}
    options={{
      ...props.options,
      creditCard: true
    }}
    {...props}
  />
))

CreditCardInput.propTypes = {}
export default CreditCardInput
