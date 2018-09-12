import React from "react"
import styled from "styled-components"
import {
  Button,
  Layout,
  LayoutItem,
  Toggle,
  Label,
  Flag,
  Wrapper
} from "@staccx/base"
import { color, spacing, font, fontWeight, ThemeComponent } from "@staccx/theme"
import menuProfile from "../../data/menuProfile"

const Profile = ({ history }) => (
  <Wrapper variant="bib">
    <Layout>
      <LayoutItem>
        <Heading>Min profil</Heading>
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

const Heading = styled.h1`
  font-size: ${font.h4};
  text-align: center;
  font-weight: ${fontWeight.bold};
  color: ${color.primary};
  margin-bottom: ${spacing.tiny};
`

const ModifiedLabel = styled(Label)`
  font-weight: normal;
`

const Center = styled.div`
  text-align: center;
`

export default Profile
