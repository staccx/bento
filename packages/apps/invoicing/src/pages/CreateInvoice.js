import React, { Component } from "react"
import {
  Wrapper,
  Heading,
  Select,
  Input,
  Button,
  ItemGroup,
  Layout,
  theming
} from "@staccx/base"
import styled from "styled-components"
import InvoiceItems from "../components/InvoiceItems/InvoiceItems"

class CreateInvoice extends Component {
  render() {
    return (
      <Wrapper>
        <Layout>
          <Heading level={1}>Opprett faktura</Heading>
          <InputFlex>
            <div>
              <Select
                placeholder="Søk etter eksisterende mottaker"
                id="findRecipent"
                label="Mottaker"
                combobox
                items={["apple", "orange", "carrot"]}
              />
            </div>
            <InputFlexRight>
              <Input
                id="invoiceDue"
                label="Forfallsdato"
                placeholder="dd.mm.åååå"
                type={"date"}
              />
            </InputFlexRight>
          </InputFlex>

          <InvoiceItems />

          <ItemGroup>
            <Button>Lagre og forhåndsvis</Button>
            <Button>Avbryt</Button>
          </ItemGroup>
        </Layout>
      </Wrapper>
    )
  }
}

const InputFlex = styled.div`
  display: flex;
  margin-bottom: ${theming.spacing.medium};
`

const InputFlexRight = styled.div`
  margin-left: ${theming.spacing.medium};
  color: ${theming.color};
`

export default CreateInvoice
