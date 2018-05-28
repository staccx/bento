import React from "react"
import { Wrapper, Heading, Button } from "@staccx/base"

const Foreign = ({ steps }) => (
  <Wrapper size="small">
    <Heading level="2">
      Spørsmål til de med utenlandsk statsborgerskap/ skatteplikt
    </Heading>
    <Button variant="primary" onClick={() => steps.confirmation()}>
      Neste steg
    </Button>
  </Wrapper>
)

export default Foreign
