import React from "react"
import { Layout, Wrapper, LayoutItem } from "@staccx/base"
import { ThemeComponent } from "@staccx/theme"
import menu from "./../data/menu"
import Account from "./../components/Account"
import Loan from "./../components/Loan"

const Overview = ({ history, accounts }) => (
  <Wrapper variant="bib">
    <Layout>
      <LayoutItem variant="fadeIn" delay="200">
        <Layout>
          {accounts.map(account => {
            if (account.accountType === "LOAN") {
              return <Loan account={account} navigate={history.push} />
            } else {
              return <Account account={account} navigate={history.push} />
            }
          })}
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
