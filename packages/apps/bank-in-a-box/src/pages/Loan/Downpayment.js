import React from "react"
import { Layout, Heading, LayoutItem } from "@staccx/base"
import AccountFilter from "../../components/AccountFilter"
import Back from "../../components/Back"

const Downpayment = ({ history, account }) => {
  return (
    <Layout variant="downpayment">
      <LayoutItem variant="fadeIn" delay="200" area="header">
        <Back history={history} path="/loan/34551524578" />
        <Heading level="2">Nedbetalingsplan</Heading>
      </LayoutItem>
      <LayoutItem variant="fadeIn" delay="400" area="menu">
        <AccountFilter account={account} details={false} />
      </LayoutItem>
      <LayoutItem variant="fadeIn" delay="600" area="main">
        Nedbetalingsplan
      </LayoutItem>
    </Layout>
  )
}

export default Downpayment
