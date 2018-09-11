import React from "react"
import styled from "styled-components"
import {
  Button,
  Layout,
  LayoutItem,
  Input,
  PhoneInput,
  Toggle,
  Label,
  Flag,
  Wrapper
} from "@staccx/base"
import { color, spacing, font, fontWeight } from "@staccx/theme"

const Deposit = () => (
  <Wrapper variant="bib">
    <Layout>
      <LayoutItem>
        <Heading>Min profil</Heading>
      </LayoutItem>
      <LayoutItem>
        <InputContent>
          <Input
            label="E-post adresse"
            placeholder="mail@mail.com"
            value="test@test.com"
            type="email"
            id="yourmail"
          />
          <PhoneInput
            label="Telefonnummer"
            type="tel"
            placeholder="XXX XX XXX"
            value="47407739"
            id="yourtel"
          />
        </InputContent>
      </LayoutItem>
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

const InputContent = styled.div`
  display: grid;
  grid-column-gap: ${spacing.small};
  grid-row-gap: ${spacing.small};
  grid-template-rows: repeat(auto-fit, 1fr);
  max-width: 250px;
  margin: auto;
`

export default Deposit
