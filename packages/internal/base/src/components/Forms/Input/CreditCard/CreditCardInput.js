import React from "react"
import Input from "../Input"

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
