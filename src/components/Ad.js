import React from "react"
import styled from "styled-components"
import { color, spacing } from "@staccx/theme"
import { Button, Box } from "@staccx/base"

const Ad = () => (
  <Box variant="adBox">
    <h3>Bruker du Tripletex?</h3>
    <p>
      Skaff deg tilgang til “selg faktura”-knappen i Tripletex. <br />
      Det tar kun et par minutter.
    </p>
    <Button>Jeg vil ha fakturasalg!</Button>
  </Box>
)

export default Ad
