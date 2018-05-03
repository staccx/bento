import React from "react"
import { font } from "@staccx/theme"
import { Button, Box, Layout, LayoutItem } from "@staccx/base"
import styled from "styled-components"
import Pack from "./Pack"

const Ad = () => (
  <Box variant="adBox">
    <Layout grid="rows">
      <LayoutItem>
        <img src="/tripletex.svg" width="200" alt="" />
      </LayoutItem>
      <LayoutItem>
        <AdHeading>Bruker du Tripletex?</AdHeading>
      </LayoutItem>
      <LayoutItem>
        <p>
          Skaff deg tilgang til “selg faktura”-knappen i Tripletex. <br />
          Det tar kun et par minutter.
        </p>
      </LayoutItem>
      <LayoutItem>
        <Pack>
          <Button>Jeg vil ha fakturasalg!</Button>
          <Button>Nei takk</Button>
          <Button>3dje</Button>
        </Pack>
      </LayoutItem>
    </Layout>
  </Box>
)

const AdHeading = styled.h3`
  font-size: ${font.h3};
`

export default Ad
