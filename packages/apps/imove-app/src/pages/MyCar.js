import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Button, Text, Heading, Layout, Box, Wrapper } from "@staccx/base"

const MyCar = () => (
  <Layout paddingBottom="huge">
    <Box variant="myCarHeader">
      <Wrapper size="small">
        <Layout>
          <Heading level="1">Min bil {/* TODO: Sanitytext */}</Heading>

          <div>
            <Heading level="2" variant="preHeader">
              Abonnement {/* TODO: Sanitytext */}
            </Heading>
            <Heading level="2">BMW i3 {/* TODO: autopopuleres */}</Heading>
          </div>

          <Box variant="carWrapper">
            <img src="/img/i3.png" alt="i3" />
            <Heading variant="orderStatus" level="3">
              Venter på levering
            </Heading>
          </Box>
        </Layout>
      </Wrapper>
    </Box>

    <div>
      <Menu>
        <Link to="/app/order-additional">
          <Button variant="mainNavigation">
            Bestill hyttebil eller tilleggsbil {/* TODO: Sanitytext */}
          </Button>
        </Link>
        <Link to="/app/sell">
          <Button variant="mainNavigation">
            Hjelp meg å selge min gamle bil {/* TODO: Sanitytext */}
          </Button>
        </Link>
        <Link to="/app/switch">
          <Button variant="mainNavigation">
            Bytt bil {/* TODO: Sanitytext */}
          </Button>
        </Link>
        <Link to="/app/service">
          <Button variant="mainNavigation">
            Bestill service {/* TODO: Sanitytext */}
          </Button>
        </Link>
        <Link to="/app/tire-change">
          <Button variant="mainNavigation">
            Bestill dekkskift {/* TODO: Sanitytext */}
          </Button>
        </Link>
      </Menu>
    </div>
    <Text variant="legalese">Du har 10 dager med gratis hyttebil igjen</Text>
    <Link to="/app/vilkar-og-betingelser">
      <Text variant="legalese">Avslutt abonnement</Text>
    </Link>
    <Link to="/app/vilkar-og-betingelser">
      <Text variant="legalese">Vilkår og betingelser</Text>
    </Link>
  </Layout>
)

const Menu = styled(Layout)`
  grid-row-gap: 1px;
`

export default MyCar
