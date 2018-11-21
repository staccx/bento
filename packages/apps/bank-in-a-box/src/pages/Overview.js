import React from "react"
import { withTheme } from "styled-components"
import { Layout, LayoutItem, ThemeComponent } from "@staccx/base"
import menu from "./../data/menu"
import Account from "../components/Account/Account"
import Loan from "../components/Loan/Loan"
import Transactions from "../components/Transactions"

const Overview = ({ history, accounts, theme }) => {
  console.log(theme)
  return (
    <Layout variant="bibPage">
      <LayoutItem variant="fadeIn" delay="200" area="header">
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
      {theme.bib.transactionsFrontpage && (
        <LayoutItem variant="fadeIn" delay="600" area="main">
          <Transactions
            transactions={accounts[0].transactions}
            header={false}
          />
        </LayoutItem>
      )}
      <LayoutItem variant="fadeIn" delay="600" area="ad">
        <ThemeComponent tagName={"ad"} />
      </LayoutItem>
    </Layout>
  )
}

export default withTheme(Overview)
