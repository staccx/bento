import React from "react"
import { Layout, Heading, LayoutItem } from "@staccx/base"
import AccountFilter from "../../components/AccountFilter"
import Invoices from "../../components/Loan/Invoices"
import Back from "../../components/Back"

const Invoice = ({ history, account }) => {
  return (
    <Layout variant="invoice">
      <LayoutItem variant="fadeIn" delay="200" area="header">
        <Back history={history} path="/loan/34551524578" />
        <Heading level="2">Faktura</Heading>
      </LayoutItem>
      <LayoutItem variant="fadeIn" delay="400" area="menu">
        <AccountFilter
          account={account}
          type="fakturaer"
          duration="siste 6 mnd"
        />
      </LayoutItem>
      <LayoutItem variant="fadeIn" delay="600" area="main">
        <Invoices />
      </LayoutItem>
    </Layout>
  )
}

export default Invoice
