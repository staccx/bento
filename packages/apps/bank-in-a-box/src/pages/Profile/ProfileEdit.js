import React from "react"
import styled from "styled-components"
import {
  Button,
  Layout,
  LayoutItem,
  Input,
  PhoneInput,
  Box,
  Heading,
  Flag,
  theming
} from "@staccx/base"
import customer from "../../data/customer"
import Back from "../../components/Back"

const ProfileEdit = ({ history }) => (
  <Layout variant="profileEdit">
    <LayoutItem variant="fadeIn" delay="200" area="header">
      <Back history={history} path="/profile/" />
      <Heading level="2">Endre profil</Heading>
    </LayoutItem>
    <LayoutItem variant="fadeIn" delay="400" area="menu">
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
    <LayoutItem variant="fadeIn" delay="600" area="main">
      <Box variant="profileAdress">
        <Flag reverse tiny img={<Button>Oppdater</Button>}>
          Adresse: <br /> Helgeplasset 137, 5148 Fyllingsdalen
        </Flag>
      </Box>
    </LayoutItem>
    <LayoutItem variant="fadeIn" delay="800" area="ad">
      <div>
        <Button>Lagre</Button>
      </div>
    </LayoutItem>
  </Layout>
)

const InputContent = styled.div`
  display: grid;
  grid-column-gap: ${theming.spacing.small};
  grid-row-gap: ${theming.spacing.small};
  grid-template-columns: auto 110px;
`

export default ProfileEdit
