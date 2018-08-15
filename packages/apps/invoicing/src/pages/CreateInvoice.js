import React, { Component } from "react"
import { Wrapper, Heading, Select, Input, Button } from "@staccx/base"

const CreateInvoice = () => (
  <Wrapper>
    <Heading level={1}>Opprett faktura</Heading>
    <div>
      <div>
        <Select
          placeholder="Søk etter eksisterende"
          label="Mottaker"
          combobox
          items={["apple", "orange", "carrot"]}
        />
      </div>
      <div>
        <Input
          id="iasdfjn!"
          label="Forfallsdato"
          placeholder="dd.mm.åååå"
          type={"date"}
        />
      </div>
    </div>
    <div>
      <Button>Lagre og forhåndsvis</Button>
      <Button>Avbryt</Button>
    </div>
  </Wrapper>
)

export default CreateInvoice
