import React from "react"
import { Heading, Layout, Input, CheckBox } from "@staccx/base"

const AddCustomerConsumer = () => (
  <div>
    <Heading level={2}>Privatkunde</Heading>
    <Layout>
      <Layout>
        <Input label="name" id="customerName" />
        <Input label="Adresse" id="customerAddress" />
        <Input label="Postnummer" id="companyPostalcode" />
      </Layout>

      <Input label="E-postadresse" id="invoiceEmail" />
      <CheckBox id="foreignCustomer">Kunden er i utlandet</CheckBox>
    </Layout>
  </div>
)

export default AddCustomerConsumer
