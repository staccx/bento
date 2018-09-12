import React from "react"
import { Layout, Wrapper, Heading } from "@staccx/base"
import Back from "../../components/Back"

const ContractDocuments = ({ history, accounts }) => (
  <Wrapper variant="bib">
    <Layout>
      <div>
        <Back history={history} path="/profile/" />
        <Heading>Avtaledokumenter</Heading>
      </div>
    </Layout>
  </Wrapper>
)

export default ContractDocuments
