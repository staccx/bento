import PropTypes from "prop-types"
import React, { Component } from "react"
import {
  Legend,
  CheckBox,
  Input,
  PhoneInput,
  CheckGroup,
  Heading,
  Paragraph,
  Button,
  Layout,
  Wrapper
} from "@staccx/base"

class ClientInfo extends Component {
  render() {
    const handleSamtykkeChange = value => {
      this.props.onSamtykkeChange(value)
    }

    const handleUtenlandsChange = value => {
      this.props.onForeignChange(value)
    }

    const handleOriginChange = value => {
      this.props.onOriginChange(value)
    }

    return (
      <Wrapper size="small">
        <Layout rowGap="large" paddingTop="huge" paddingBottom="large">
          <Layout>
            <Heading level="2">Personalia</Heading>
            <PhoneInput label="Mobilnummer" id="dlkn2" />
            <Input label="E-post" placeholder="mail@mail.com" id="mail" />
          </Layout>
          <Layout>
            <Heading level="2">Om din sparing</Heading>
            <Paragraph>
              Vi er pliktig til å innhente informasjon om ditt kundeforhold i
              henhold til hvitvaskingsloven og ber derfor om at du svarer på
              spørsmålene nedenfor.
            </Paragraph>
          </Layout>
          <Layout rowGap="small">
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
                Gave
              </CheckBox>
              <CheckBox
                group="opprinnelse"
                id="inheritance"
                value="inheritance"
                key="test676"
              >
                Arv
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
              <CheckBox
                group="opprinnelse"
                id="other"
                value="other"
                key="test383"
              >
                Annet
              </CheckBox>
            </CheckGroup>
          </Layout>
          <Layout rowGap="small">
            <Legend>Huk av kun dersom dette gjelder deg</Legend>
            <CheckGroup onChange={handleUtenlandsChange} group="utenlands">
              <CheckBox id="231432" value="foreignCitizen" key="ewrr">
                Jeg har utenlandsk statsborgerskap og/eller skatteplikt utenfor
                Norge.
              </CheckBox>
              <CheckBox
                id="5436457"
                value="notOnlyPrivatePurpose"
                key="ewrrtgfhg"
              >
                Kontoen er ikke til privat bruk.
              </CheckBox>
            </CheckGroup>
          </Layout>

          <Layout rowGap="small">
            <Heading level="2">Samtykke</Heading>
            <CheckGroup onChange={handleSamtykkeChange} group="samtykke">
              <CheckBox
                group="samtykke"
                id="gffdsgdf"
                value="electronicDocumentation"
                key="45"
              >
                Jeg samtykker til mottak av elektronisk kommunikasjon
              </CheckBox>
              <CheckBox
                group="samtykke"
                id="fdsfdsdf7f"
                value="newsAndAdvertisment"
                key="45fdfed"
              >
                Jeg samtykker til mottak av av tilbud og nyheter om andre
                produkter.
              </CheckBox>
            </CheckGroup>
          </Layout>

          <Button variant="primary" onClick={() => this.props.steps.bankId()}>
            Til signering
          </Button>
        </Layout>
      </Wrapper>
    )
  }
}

export default ClientInfo

ClientInfo.propTypes = {
  onForeignChange: PropTypes.func.isRequired,
  onOriginChange: PropTypes.func.isRequired,
  onSamtykkeChange: PropTypes.func.isRequired,
  steps: PropTypes.any
}
