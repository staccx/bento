import React from "react"
import styled from "styled-components"
import {
  Button,
  Layout,
  LayoutItem,
  Toggle,
  Label,
  Flag,
  Heading
} from "@staccx/base"
import { TranslatedText } from "@staccx/i18n"

const Profile = ({
  renderMenu = () => null,
  renderPersonalInfo = () => null,
  onElectronicConsentChange,
  onMarketingConsentChange
}) => (
  <Layout variant="profile">
    <LayoutItem variant="fadeIn" delay="200" area="header">
      <div>
        <Heading level="2">
          <TranslatedText i18nKey={"my-profile"}>Min profil</TranslatedText>
        </Heading>
      </div>
    </LayoutItem>
    <LayoutItem variant={["fadeIn", "moveForwards"]} delay={"300"} area={"misc"}>
      {renderPersonalInfo()}
    </LayoutItem>
    <LayoutItem variant={["fadeIn", "moveBackwards"]} delay="400" area="menu">
      {renderMenu()}
    </LayoutItem>
    <LayoutItem variant="fadeIn" delay="600" area="main">
      <Layout>
        <Flag
          small
          img={
            <Toggle
              group="testddd"
              id="samtykke-elektronisk-komm"
              onChange={onElectronicConsentChange}
              defaultChecked
            />
          }
        >
          <ModifiedLabel htmlFor="samtykke-elektronisk-komm">
            <TranslatedText i18nKey={"elektronisk-samtykke"}>
              Jeg samtykker til mottak av elektronisk kommunikasjon og at
              dokumentene kan sendes til meg elektronisk
            </TranslatedText>
          </ModifiedLabel>
        </Flag>

        <Flag
          small
          img={
            <Toggle
              defaultChecked
              group="news"
              id="tilbud-nyheter"
              onChange={onMarketingConsentChange}
            />
          }
        >
          <ModifiedLabel htmlFor="tilbud-nyheter">
            <TranslatedText i18nKey={"markedsforing-samtykke"}>
              Jeg samtykker til mottak av tilbud og nyheter om andre produkter
              fra Aprila-banken
            </TranslatedText>
          </ModifiedLabel>
        </Flag>
        <LayoutItem variant="fadeIn" delay="900">
          <Button>Lagre</Button>
        </LayoutItem>
      </Layout>
    </LayoutItem>
  </Layout>
)

const ModifiedLabel = styled(Label)`
  font-weight: normal;
`

export default Profile
