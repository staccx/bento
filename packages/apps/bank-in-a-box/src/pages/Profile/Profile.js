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
  onSave,
  isLoading,
  onEmailChange,
  onSmsChange,
  email,
  sms
}) => (
  <Layout variant="profile">
    <LayoutItem variant="fadeIn" delay="200" area="header">
      <div>
        <Heading level="2">
          <TranslatedText i18nKey={"my-profile"}>Min profil</TranslatedText>
        </Heading>
      </div>
    </LayoutItem>
    <LayoutItem
      variant={["fadeIn", "moveForwards"]}
      delay={"300"}
      area={"misc"}
    >
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
              onChange={onEmailChange}
              defaultChecked={email}
            />
          }
        >
          <ModifiedLabel htmlFor="samtykke-elektronisk-komm">
            <TranslatedText i18nKey={"samtykke-epost"}>
              Ja, jeg ønsker å motta tilpasset markedsføring på e-post
            </TranslatedText>
          </ModifiedLabel>
        </Flag>

        <Flag
          small
          img={
            <Toggle
              defaultChecked={sms}
              group="news"
              id="tilbud-nyheter"
              onChange={onSmsChange}
            />
          }
        >
          <ModifiedLabel htmlFor="tilbud-nyheter">
            <TranslatedText i18nKey={"samtykke-sms"}>
              Ja, jeg ønsker å motta tilpasset markedsføring på SMS
            </TranslatedText>
          </ModifiedLabel>
        </Flag>
        <LayoutItem variant="fadeIn" delay="900">
          <Button onClick={onSave} disabled={isLoading} variant={"submit"}>
            <TranslatedText i18nKey={"lagre"}>Lagre</TranslatedText>
          </Button>
        </LayoutItem>
      </Layout>
    </LayoutItem>
  </Layout>
)

const ModifiedLabel = styled(Label)`
  font-weight: normal;
`

export default Profile
