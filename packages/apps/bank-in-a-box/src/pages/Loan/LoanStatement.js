import React from "react"
import { Layout, Wrapper, Heading, Button } from "@staccx/base"
import { backwards } from "../../components/transitions/transitions"
import AccountFilter from "../../components/AccountFilter"

const LoanStatement = ({ history, account }) => {
  return (
    <Wrapper variant="bib">
      <Layout>
        <Heading level="2">Kontoutskrift</Heading>
        <AccountFilter account={account} />
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
