import React from "react"
import { Layout, Wrapper, LayoutItem, ThemeComponent } from "@staccx/base"
import menu from "./../data/menu"
import Account from "./../components/Account"

const Overview = ({ history, accounts }) => (
  <Wrapper variant="bib">
    <Layout>
      <LayoutItem variant="fadeIn" delay="200">
        <Layout>
          {accounts.map(account => (
            <Account account={account} navigate={history.push} />
          ))}
        </Layout>
      </LayoutItem>
      <LayoutItem variant="fadeIn" delay="400">
        <ThemeComponent
          tagName={"menu"}
          menuElements={menu}
          history={history}
        />
      </LayoutItem>
      <LayoutItem variant="fadeIn" delay="600">
        <ThemeComponent tagName={"ad"} />
      </LayoutItem>
    </Layout>
  </Wrapper>
)

export default Overview
