import React from "react"
import {
  Wrapper,
  Heading,
  Select,
  Input,
  Button,
  ItemGroup,
  Layout
} from "@staccx/base"
import { spacing, color } from "@staccx/theme"
import styled from "styled-components"

const CreateInvoice = () => (
  <Wrapper>
    <Layout>
      <Heading level={1}>Opprett faktura</Heading>
      <InputFlex>
        <div>
          <Select
            placeholder="Søk etter eksisterende"
            label="Mottaker"
            combobox
            items={["apple", "orange", "carrot"]}
          />
        </div>
        <InputFlexRight>
          <Input
            id="iasdfjn!"
            label="Forfallsdato"
            placeholder="dd.mm.åååå"
            type={"date"}
          />
        </InputFlexRight>
      </InputFlex>
      <ItemGroup>
        <Button>Lagre og forhåndsvis</Button>
        <Button>Avbryt</Button>
      </ItemGroup>
    </Layout>
  </Wrapper>
)

const InputFlex = styled.div`
  display: flex;
  margin-bottom: ${spacing.medium};
`

const InputFlexRight = styled.div`
  margin-left: ${spacing.medium};
  color: ${color};
`

export default CreateInvoice
