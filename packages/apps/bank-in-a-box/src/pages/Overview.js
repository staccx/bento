import React from "react"
import { withTheme } from "styled-components"
import { Layout, Wrapper, LayoutItem, ThemeComponent } from "@staccx/base"
import menu from "./../data/menu"
import Account from "../components/Account/Account"
import Loan from "../components/Loan/Loan"

const Overview = ({ history, accounts, theme }) => {
  console.log(theme)
  return (
    <Wrapper variant="bib">
      <Layout variant="bibPage">
        <LayoutItem variant="fadeIn" delay="200" area="accounts">
          <Layout>
            {accounts.map(account => {
              if (account.accountType === "LOAN") {
                if (theme.bib.loan) {
                  return (
                    <Loan
                      account={account}
                      navigate={history.push}
                      key={account.accountId}
                    />
                  )
                }
              } else {
                if (theme.bib.deposit) {
                  return (
                    <Account
                      account={account}
                      navigate={history.push}
                      key={account.accountId}
                    />
                  )
                }
              }
            })}
          </Layout>
        </LayoutItem>
        <LayoutItem variant="fadeIn" delay="400" area="menu">
          <ThemeComponent
            tagName={"menu"}
            menuElements={menu}
            history={history}
          />
        </LayoutItem>
        <LayoutItem variant="fadeIn" delay="600" area="featuredOverview">
          <ThemeComponent tagName={"featuredOverview"} />
        </LayoutItem>
        <LayoutItem variant="fadeIn" delay="600" area="featuredAd">
          <ThemeComponent tagName={"ad"} />
        </LayoutItem>
      </Layout>
    </Wrapper>
  )
}

export default withTheme(Overview)
