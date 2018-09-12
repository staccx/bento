import React from "react"
import { Layout, Wrapper, Heading } from "@staccx/base"
import Back from "../../components/Back"

const AnnualStatement = ({ history, accounts }) => (
  <Wrapper variant="bib">
    <Layout>
      <div>
        <Back history={history} path="/profile/" />
        <Heading level="2">Årsoppgave</Heading>
      </div>
    </Layout>
  </Wrapper>
)

export default AnnualStatement
