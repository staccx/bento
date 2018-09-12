import React from "react"
import { Layout, Wrapper, Heading, Button } from "@staccx/base"
import { backwards } from "../../components/transitions/transitions"
import AccountFilter from "../../components/AccountFilter"
import Transactions from "../../components/Transactions"

const LoanStatement = ({ history, account, transactions }) => {
  return (
    <Wrapper variant="bib">
      <Layout>
        <Heading level="2">Kontoutskrift</Heading>
        <AccountFilter account={account} />
        <Transactions transactions={transactions} />
        <div>
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
        </div>
      </Layout>
    </Wrapper>
  )
}

export default LoanStatement
