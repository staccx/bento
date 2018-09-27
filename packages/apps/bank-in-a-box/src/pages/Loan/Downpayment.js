import React from "react"
import { Layout, Wrapper, Heading, LayoutItem } from "@staccx/base"
import AccountFilter from "../../components/AccountFilter"
import Back from "../../components/Back"

const Downpayment = ({ history, account }) => {
  return (
    <Wrapper variant="bib">
      <Layout>
        <LayoutItem variant="fadeIn" delay="200">
          <Back history={history} path="/account/34551524578" />
          <Heading level="2">Nedbetalingsplan</Heading>
        </LayoutItem>
        <LayoutItem variant="fadeIn" delay="400">
          <AccountFilter account={account} details={false} />
        </LayoutItem>
        <LayoutItem variant="fadeIn" delay="600">
          Nedbetalingsplan
        </LayoutItem>
      </Layout>
    </Wrapper>
  )
}

export default Downpayment
