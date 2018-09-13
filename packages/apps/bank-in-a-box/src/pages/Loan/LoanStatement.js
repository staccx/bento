import React from "react"
import { Layout, Wrapper, Heading, LayoutItem } from "@staccx/base"
import AccountFilter from "../../components/AccountFilter"
import Transactions from "../../components/Transactions"
import Back from "../../components/Back"

const LoanStatement = ({ history, account, transactions }) => {
  return (
    <Wrapper variant="bib">
      <Layout>
        <LayoutItem variant="fadeIn" delay="200">
          <Back history={history} path="/account/34551524578" />
          <Heading level="2">Kontoutskrift</Heading>
        </LayoutItem>
        <LayoutItem variant="fadeIn" delay="400">
          <AccountFilter account={account} />
        </LayoutItem>
        <LayoutItem variant="fadeIn" delay="600">
          <Transactions transactions={account.transactions} />
        </LayoutItem>
      </Layout>
    </Wrapper>
  )
}

export default LoanStatement
