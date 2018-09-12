import React from "react"
import { Layout, Wrapper, Heading } from "@staccx/base"
import AccountFilter from "../../components/AccountFilter"
import Invoices from "../../components/Invoices"
import Back from "../../components/Back"

const Invoice = ({ history, account }) => {
  return (
    <Wrapper variant="bib">
      <Layout>
        <div>
          <Back history={history} path="/account/34551524578" />
          <Heading level="2">Faktura</Heading>
        </div>

        <AccountFilter
          account={account}
          type="fakturaer"
          duration="siste 6 mnd"
        />
        <Invoices />
      </Layout>
    </Wrapper>
  )
}

export default Invoice
