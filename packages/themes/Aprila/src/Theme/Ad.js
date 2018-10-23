import React from "react"
import {
  Button,
  Box,
  Layout,
  LayoutItem,
  ItemGroup,
  theming
} from "@staccx/base"
import styled from "styled-components"

const Ad = () => (
  <LayoutItem area="aside">
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
          <ItemGroup>
            <Button variant="secondary">Jeg vil ha fakturasalg!</Button>
          </ItemGroup>
        </LayoutItem>
      </Layout>
    </Box>
  </LayoutItem>
)

const AdHeading = styled.h3`
  font-size: ${theming.font.h3};
`
export const AdStyle = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: Ad },
  "ad"
)
export default Ad
