import React from "react"
import { Wrapper, Heading, Button } from "@staccx/base"

const BankId = ({ steps }) => (
  <Wrapper size="small">
    <Heading level="2">BankID-loggin</Heading>
    <Button variant="primary" onClick={() => steps.consent()}>
      Neste steg
    </Button>
  </Wrapper>
)

export default BankId
