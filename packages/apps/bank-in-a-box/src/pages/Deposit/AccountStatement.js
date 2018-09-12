import React from "react"
import { Layout, Wrapper, Heading, Button } from "@staccx/base"
import { backwards } from "../../components/transitions/transitions"
import AccountFilter from "../../components/AccountFilter"
import Transactions from "../../components/Transactions"
import Back from "../../components/Back"

const LoanStatement = ({ history, account, transactions }) => {
  return (
    <Wrapper variant="bib">
      <Layout>
        <div>
          <Back history={history} path="/account/546126722" />
          <Heading level="2">Kontoutskrift</Heading>
        </div>
        <AccountFilter account={account} />
        <Transactions transactions={account.transactions} />
        <Button
          onClick={() =>
            history.push({
              pathname: "/account/34551524578",
              state: backwards
            })
          }
        >
          Tilbake
        </Button>
      </Layout>
    </Wrapper>
  )
}

export default LoanStatement
