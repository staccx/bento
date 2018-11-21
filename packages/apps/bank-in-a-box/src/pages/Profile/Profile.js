import React from "react"
import styled from "styled-components"
import {
  Button,
  Layout,
  LayoutItem,
  Toggle,
  Label,
  Flag,
  Heading,
  ThemeComponent
} from "@staccx/base"
import menuProfile from "../../data/menuProfile"
import Back from "../../components/Back"

const Profile = ({ history }) => (
  <Layout variant="profile">
    <LayoutItem variant="fadeIn" delay="200" area="header">
      <div>
        <Back history={history} path="/" />
        <Heading level="2">Min profil</Heading>
      </div>
    </LayoutItem>
    <LayoutItem variant="fadeIn" delay="400" area="menu">
      <ThemeComponent
        tagName={"menuColumn"}
        menuElements={menuProfile}
        history={history}
      />
    </LayoutItem>
    <LayoutItem variant="fadeIn" delay="600" area="main">
      <Layout>
        <Flag
          small
          img={
            <Toggle
              group="testddd"
              id="samtykke-elektronisk-komm"
              onChange={() => null}
              defaultChecked
            />
          }
        >
          <ModifiedLabel htmlFor="samtykke-elektronisk-komm">
            Jeg samtykker til mottak av elektronisk kommunikasjon og at
            dokumentene kan sendes til meg elektronisk
          </ModifiedLabel>
        </Flag>

        <Flag
          small
          img={
            <Toggle
              defaultChecked
              group="news"
              id="tilbud-nyheter"
              onChange={() => null}
            />
          }
        >
          <ModifiedLabel htmlFor="tilbud-nyheter">
            Jeg samtykker til mottak av tilbud og nyheter om andre produkter fra
            Nordfjell-banken
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
