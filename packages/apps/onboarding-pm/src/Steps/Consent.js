import React from "react"
import { Wrapper, Button } from "@staccx/base"

const Samtykke = ({ steps }) => (
  <Wrapper size="small">
    <img
      src="https://preview.ibb.co/n0xQAy/samtykke.png"
      alt="samtykke"
      height="278"
    />
    <Button variant="primary" onClick={() => steps.sanctionsList()}>
      Neste steg
    </Button>
  </Wrapper>
)

export default Samtykke
