import React from "react"
import { Layout, Wrapper, Heading, LayoutItem } from "@staccx/base"
import AccountFilter from "../../components/AccountFilter"
import Invoices from "../../components/Loan/Invoices"
import Back from "../../components/Back"

const Invoice = ({ history, account }) => {
  return (
    <Wrapper variant="bib">
      <Layout>
        <LayoutItem variant="fadeIn" delay="200">
          <Back history={history} path="/loan/34551524578" />
          <Heading level="2">Faktura</Heading>
        </LayoutItem>
        <LayoutItem variant="fadeIn" delay="400">
          <AccountFilter
            account={account}
            type="fakturaer"
            duration="siste 6 mnd"
          />
        </LayoutItem>
        <LayoutItem variant="fadeIn" delay="600">
          <Invoices />
        </LayoutItem>
      </Layout>
    </Wrapper>
  )
}

export default Invoice
