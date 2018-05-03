import React from "react"
import Pack from "./Pack"
import { Button, Box } from "@staccx/base"

const Ad = () => (
  <Box variant="adBox">
    <img src="/tripletex.svg" width="200" alt="" />
    <h3>Bruker du Tripletex?</h3>
    <p>
      Skaff deg tilgang til “selg faktura”-knappen i Tripletex. <br />
      Det tar kun et par minutter.
    </p>
    <Pack>
      <Button>Jeg vil ha fakturasalg!</Button>
      <Button>Nei takk</Button>
      <Button>3dje</Button>
    </Pack>
  </Box>
)

export default Ad
