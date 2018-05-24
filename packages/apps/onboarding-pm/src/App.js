import React, { Component } from "react"
import styled from "styled-components"
import {
  Legend,
  Wrapper,
  CheckBox,
  Input,
  PhoneInput,
  CheckGroup,
  Heading,
  Paragraph
} from "@staccx/base"
import { ThemeProxyProvider, spacing } from "@staccx/theme"
import theme from "./theme.js"

const handleSamtykkeChange = value => {
  console.log("You checked " + value)
}

const handleUtenlandsChange = value => {
  console.log("You checked " + value)
}

const handleOriginChange = value => {
  console.log("You checked " + value)
}

class App extends Component {
  render() {
    return (
      <ThemeProxyProvider theme={theme}>
        <Form size="small">
          <Heading level="2">Personalia</Heading>
          <PhoneInput label="Mobiltelefon" id="dlkn2" />
          <Input label="E-post" placeholder="mail@mail.com" id="mail" />
          <div>
            <Heading level="2">Om din sparing</Heading>
            <Paragraph>
              Vi er pliktig til å innhente informasjon om ditt kundeforhold i
              henhold til hvitvaskingsloven og ber derfor om at du svarer på
              spørsmålene nedenfor.
            </Paragraph>
          </div>
          <fieldset>
            <Legend>Hva er opprinnelsen til midlene som spares?</Legend>
            <CheckGroup onChange={handleOriginChange} group="origin">
              <CheckBox
                group="opprinnelse"
                id="salary"
                value="salary"
                key="test"
              >
                Lønn/Pensjon
              </CheckBox>
              <CheckBox group="opprinnelse" id="gift" value="gift" key="test2">
                Gave/Arv
              </CheckBox>
              <CheckBox
                group="opprinnelse"
                id="savings"
                value="savings"
                key="test3"
              >
                Oppsparte midler
              </CheckBox>
              <CheckBox
                group="opprinnelse"
                id="property"
                value="property"
                key="test4"
              >
                Salg av eiendom
              </CheckBox>
            </CheckGroup>
          </fieldset>
          <fieldset>
            <Legend>Huk av kun dersom dette gjelder deg</Legend>
            <CheckGroup onChange={handleUtenlandsChange} group="utenlands">
              <CheckBox id="231432" value="foreignCitizen">
                Jeg har utenlandsk statsborgerskap og/eller skatteplikt utenfor
                Norge.
              </CheckBox>
              <CheckBox id="5436457" value="notOnlyPrivatePurpose">
                Kontoen er ikke til privat bruk.
              </CheckBox>
            </CheckGroup>
          </fieldset>

          <fieldset>
            <Heading level="2">Samtykke</Heading>
            <CheckGroup onChange={handleSamtykkeChange} group="samtykke">
              <CheckBox
                group="samtykke"
                id="gffdsgdf"
                value="electronicDocumentation"
              >
                Jeg samtykker til mottak av elektronisk kommunikasjon
              </CheckBox>
              <CheckBox
                group="samtykke"
                id="fdsfdsdf7f"
                value="newsAndAdvertisment"
              >
                Jeg samtykker til mottak av av tilbud og nyheter om andre
                produkter fra Nordsjøbanken.
              </CheckBox>
            </CheckGroup>
          </fieldset>
        </Form>
      </ThemeProxyProvider>
    )
  }
}

const Form = styled(Wrapper)`
  padding-top: ${spacing.large};
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
`

export default App
