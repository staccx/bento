import React from "react"
import { Wrapper, Heading, Button } from "@staccx/base"

const SanctionList = ({ steps }) => (
  <Wrapper size="small">
    <Heading level="2">Ekstra spørsmål pga treff på sanksjonsliste</Heading>
    <Button variant="primary" onClick={() => steps.foreign()}>
      Neste steg
    </Button>
  </Wrapper>
)

export default SanctionList
