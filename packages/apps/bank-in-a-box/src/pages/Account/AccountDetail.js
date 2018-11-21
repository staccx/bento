import React from "react"
import { Layout, LayoutItem, ThemeComponent, Box, List } from "@staccx/base"
import AccountHeading from "../../components/Account/AccountHeading"
import menuDeposit from "../../data/menuDeposit"
import Back from "../../components/Back"
import AccountInfoDeposit from "../../components/Account/Account.Info.Deposit"
import { withTheme } from "styled-components"
import Transactions from "../../components/Transactions"

const AccountDetail = ({ account, history, theme }) => {
  const menu = menuDeposit(account.accountId)

  return (
    <Layout variant="accountDetail">
      <LayoutItem variant="fadeIn" delay="200" area="header">
        <div>
          <Back history={history} path="/" />
        </div>
        <AccountHeading account={account} />
      </LayoutItem>
      <LayoutItem variant="fadeIn" delay="400" area="menu">
        <ThemeComponent
          tagName={"menu"}
          menuElements={menu}
          history={history}
        />
      </LayoutItem>
      <LayoutItem variant="fadeIn" delay="600" area="main">
        <Box variant={"accountInfo"}>
          <List>
            <AccountInfoDeposit account={account} />
          </List>
        </Box>
      </LayoutItem>
      {theme.bib.transactionsFrontpage && (
        <LayoutItem variant="fadeIn" delay="800" area="ad">
          <Transactions transactions={account.transactions} header={false} />
        </LayoutItem>
      )}
    </Layout>
  )
}

export default withTheme(AccountDetail)
