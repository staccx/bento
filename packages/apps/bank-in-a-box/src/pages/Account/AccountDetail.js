import React from "react"
import {
  Layout,
  LayoutItem,
  ThemeComponent,
  Box,
  List,
  Heading
} from "@staccx/base"
import menuDeposit from "../../data/menuDeposit"
import AccountInfoDeposit from "../../components/Account/Account.Info.Deposit"
import { withTheme } from "styled-components"
import Transactions from "../../components/Transactions"
import { TranslatedText } from "@staccx/i18n"

const AccountDetail = ({ account, transactions }) => {
  const menu = menuDeposit(account.accountId)

  return (
    <Layout variant="accountDetail">
      <LayoutItem variant="fadeIn" delay="200" area="header">
        <ThemeComponent tagName={"accountHeading"} account={account} />
      </LayoutItem>
      <LayoutItem variant="fadeIn" delay="400" area="menu">
        <ThemeComponent tagName={"subMenu"} menuElements={menu} />
      </LayoutItem>
      <LayoutItem variant="fadeIn" delay="600" area="main">
        <Heading variant="accountSubheading" level="2">
          <TranslatedText i18nKey="kontodetaljer" fallback="Kontodetaljer" />
        </Heading>
        <Box variant={"accountInfo"}>
          <List>
            <AccountInfoDeposit account={account} />
          </List>
        </Box>
      </LayoutItem>
      <LayoutItem variant="fadeIn" delay="800" area="ad">
        <Heading variant="accountSubheading" level="2">
          <TranslatedText i18nKey="transaksjoner" fallback="Transaksjoner" />
        </Heading>
        <Transactions transactions={transactions} header={false} />
      </LayoutItem>
    </Layout>
  )
}

export default withTheme(AccountDetail)
