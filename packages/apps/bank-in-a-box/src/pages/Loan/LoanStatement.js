import React from "react"
import { Layout, Wrapper, Heading } from "@staccx/base"
import AccountFilter from "../../components/AccountFilter"
import Transactions from "../../components/Transactions"
import Back from "../../components/Back"

const LoanStatement = ({ history, account, transactions }) => {
  return (
    <Wrapper variant="bib">
      <Layout>
        <div>
          <Back history={history} path="/account/34551524578" />
          <Heading level="2">Kontoutskrift</Heading>
        </div>
        <AccountFilter account={account} />
        <Transactions transactions={account.transactions} />
      </Layout>
    </Wrapper>
  )
}

export default LoanStatement
