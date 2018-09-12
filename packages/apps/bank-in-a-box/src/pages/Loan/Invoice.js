import React from "react"
import { Layout, Wrapper, Heading, Button } from "@staccx/base"
import { backwards } from "../../components/transitions/transitions"
import AccountFilter from "../../components/AccountFilter"
import Invoices from "../../components/Invoices"

const Invoice = ({ history, account }) => {
  return (
    <Wrapper variant="bib">
      <Layout>
        <Heading level="2">Faktura</Heading>
        <AccountFilter
          account={account}
          type="fakturaer"
          duration="siste 6 mnd"
        />
        <Invoices />
        <Button
          onClick={() =>
            history.push({
              pathname: "/account/34551524578",
              state: backwards
            })
          }
        >
          Lagre
        </Button>
      </Layout>
    </Wrapper>
  )
}

export default Invoice
