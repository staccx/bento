import React from "react"
import { Button, Text, Heading, Layout, Box, Wrapper } from "@staccx/base"

const Home = ({ history }) => (
  <Layout>
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
      <Button
        onClick={() =>
          history.push({
            pathname: "/order/"
          })
        }
        variant="mainNavigation"
      >
        Bestill hyttebil eller tilleggsbil {/* TODO: Sanitytext */}
      </Button>
      <Button
        onClick={() =>
          history.push({
            pathname: "/sell/"
          })
        }
        variant="mainNavigation"
      >
        Hjelp meg å selge min gamle bil {/* TODO: Sanitytext */}
      </Button>
      <Button
        onClick={() =>
          history.push({
            pathname: "/switch/"
          })
        }
        variant="mainNavigation"
      >
        Bytt bil {/* TODO: Sanitytext */}
      </Button>
      <Button
        onClick={() =>
          history.push({
            pathname: "/service/"
          })
        }
        variant="mainNavigation"
      >
        Bestill service {/* TODO: Sanitytext */}
      </Button>
      <Button
        onClick={() =>
          history.push({
            pathname: "/tire-change/"
          })
        }
        variant="mainNavigation"
      >
        Bestill dekkskift {/* TODO: Sanitytext */}
      </Button>
    </div>
    <Text variant="legalese">Du har 10 dager med gratis hyttebil igjen</Text>
    <br />
    <Text variant="legalese">Vilkår og betingelser</Text>
  </Layout>
)

export default Home
