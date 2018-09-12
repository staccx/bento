import React from "react"
import styled from "styled-components"
import {
  Button,
  Layout,
  LayoutItem,
  Toggle,
  Label,
  Flag,
  Wrapper,
  Heading
} from "@staccx/base"
import { ThemeComponent } from "@staccx/theme"
import menuProfile from "../../data/menuProfile"
import Back from "../../components/Back"

const Profile = ({ history }) => (
  <Wrapper variant="bib">
    <Layout>
      <LayoutItem>
        <div>
          <Back history={history} path="/" />
          <Heading level="2">Min profil</Heading>
        </div>
      </LayoutItem>
      <ThemeComponent
        tagName={"menu"}
        menuElements={menuProfile}
        history={history}
      />
      <LayoutItem>
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
      </LayoutItem>
      <LayoutItem>
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
      </LayoutItem>
      <LayoutItem>
        <Center>
          <Button>Lagre</Button>
        </Center>
      </LayoutItem>
    </Layout>
  </Wrapper>
)

const ModifiedLabel = styled(Label)`
  font-weight: normal;
`

const Center = styled.div`
  text-align: center;
`

export default Profile
