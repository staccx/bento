import React from "react"
import styled from "styled-components"
import {
  Button,
  Layout,
  LayoutItem,
  Input,
  PhoneInput,
  Wrapper
} from "@staccx/base"
import { color, spacing, font, fontWeight } from "@staccx/theme"
import customer from "../../data/customer"

const ProfileEdit = () => (
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
            value={customer.mail}
            type="email"
            id="yourmail"
          />
          <PhoneInput
            label="Telefonnummer"
            type="tel"
            placeholder="XXX XX XXX"
            value={customer.tel}
            id="yourtel"
          />
        </InputContent>
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

export default ProfileEdit
