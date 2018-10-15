import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Button, Text, Heading, Layout, Box, Wrapper } from "@staccx/base"
import { TranslatedText } from "@staccx/i18n"

const MyCar = () => (
  <Layout paddingBottom="huge">
    <Box variant="myCarHeader">
      <Wrapper size="small">
        <Layout>
          <Heading level="1">
            <TranslatedText i18nKey="heading-min-bil" />
          </Heading>

          <div>
            <Heading level="2" variant="preHeader">
              <TranslatedText i18nKey="subheading-min-side-abonnement" />
            </Heading>
            <Heading level="2">BMW i3 {/* TODO: autopopuleres */}</Heading>
          </div>

          <Box variant="carWrapper">
            <img src="/img/i3.png" alt="i3" />
            <Heading variant="orderStatus" level="3">
              <TranslatedText i18nKey="bestillingsstatus-venter-pa-levering" />
            </Heading>
          </Box>
        </Layout>
      </Wrapper>
    </Box>

    <Wrapper size="small">
      <Layout>
        <Menu>
          <Link to="/app/order-additional">
            <Button variant="mainNavigation">
              <TranslatedText i18nKey="nav-bestill-hyttebil-eller-tilleggsbil" />
            </Button>
          </Link>
          <Link to="/app/sell">
            <Button variant="mainNavigation">
              <TranslatedText i18nKey="nav-hjelp-meg-a-selge-min-gamle-bil" />
            </Button>
          </Link>
          <Link to="/app/switch">
            <Button variant="mainNavigation">
              <TranslatedText i18nKey="nav-bytt-bil" />
            </Button>
          </Link>
          <Link to="/app/service">
            <Button variant="mainNavigation">
              <TranslatedText i18nKey="nav-bestill-service" />
            </Button>
          </Link>
          <Link to="/app/tire-change">
            <Button variant="mainNavigation">
              <TranslatedText i18nKey="nav-bestill-dekkskift" />
            </Button>
          </Link>
        </Menu>

        <Text variant="legalese">
          Du har 10 dager med gratis hyttebil igjen {/* TODO: autopopuleres */}
        </Text>
        <Link to="/app/end/">
          <Text variant="legalese">
            <TranslatedText i18nKey="nav-avslutt-abonnement" />
          </Text>
        </Link>
        <Link to="/app/vilkar-og-betingelser">
          <Text variant="legalese">
            <TranslatedText i18nKey="nav-vilkar-og-betingelser" />
          </Text>
        </Link>
      </Layout>
    </Wrapper>
  </Layout>
)

const Menu = styled(Layout)`
  grid-row-gap: 1px;
`

export default MyCar
