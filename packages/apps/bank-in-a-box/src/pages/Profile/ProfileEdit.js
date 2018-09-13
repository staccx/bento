import React from "react"
import styled from "styled-components"
import {
  Button,
  Layout,
  LayoutItem,
  Input,
  PhoneInput,
  Wrapper,
  Box,
  Heading,
  Flag
} from "@staccx/base"
import { spacing } from "@staccx/theme"
import customer from "../../data/customer"
import Back from "../../components/Back"

const ProfileEdit = ({ history }) => (
  <Wrapper variant="bib">
    <Layout>
      <LayoutItem variant="fadeIn" delay="200">
        <Back history={history} path="/profile/" />
        <Heading level="2">Endre profil</Heading>
      </LayoutItem>
      <LayoutItem variant="fadeIn" delay="400">
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
      <LayoutItem variant="fadeIn" delay="600">
        <Box variant="profileAdress">
          <Flag reverse tiny img={<Button>Oppdater</Button>}>
            Adresse: <br /> Helgeplasset 137, 5148 Fyllingsdalen
          </Flag>
        </Box>
      </LayoutItem>
      <LayoutItem variant="fadeIn" delay="800">
        <div>
          <Button>Lagre</Button>
        </div>
      </LayoutItem>
    </Layout>
  </Wrapper>
)

const InputContent = styled.div`
  display: grid;
  grid-column-gap: ${spacing.small};
  grid-row-gap: ${spacing.small};
  grid-template-columns: auto 110px;
`

export default ProfileEdit
