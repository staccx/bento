import React from "react"
import { Layout, Wrapper, Heading, Button } from "@staccx/base"
import { backwards } from "../../components/transitions/transitions"

const Invoice = ({ history }) => {
  return (
    <Wrapper variant="bib">
      <Layout>
        <Heading level="2">Faktura</Heading>
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
