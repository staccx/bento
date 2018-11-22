import React from "react"
import { Layout, LayoutItem, List } from "@staccx/base"
import Back from "../../components/Back"
import AccountFilter from "../../components/AccountFilter"
import AnnualStatementList from "../../components/AnnualStatementList"

const AnnualStatement = ({ history, accounts }) => (
  <Layout variant="annualStatment">
    <LayoutItem variant="fadeIn" delay="200" area="header">
      <Back history={history} path="/profile/" />
    </LayoutItem>
    <LayoutItem variant="fadeIn" delay="400" area="menu">
      <AccountFilter years={["2017", "2016"]} />
    </LayoutItem>
    <LayoutItem variant="fadeIn" delay="600" area="main">
      <List>
        <AnnualStatementList />
      </List>
    </LayoutItem>
  </Layout>
)

export default AnnualStatement
