import React from "react"
import { Layout, Wrapper } from "@staccx/base"
import { ThemeComponent } from "@staccx/theme"
import menu from "./../data/menu"
import Account from "./../components/Account"

const Overview = ({ history, accounts }) => (
  <Wrapper variant="bib">
    <Layout>
      {accounts.map(account => (
        <Account account={account} navigate={history.push} />
      ))}
      <ThemeComponent tagName={"menu"} menuElements={menu} history={history} />
      <ThemeComponent tagName={"ad"} />
    </Layout>
  </Wrapper>
)

export default Overview
