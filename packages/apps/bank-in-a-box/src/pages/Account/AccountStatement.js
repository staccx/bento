import React from "react"
import { Layout, Heading, LayoutItem } from "@staccx/base"
import AccountFilter from "../../components/AccountFilter"
import Transactions from "../../components/Transactions"
import Back from "../../components/Back"
import { TranslatedText } from "@staccx/i18n"

const LoanStatement = ({ history, account, transactions }) => {
  return (
    <Layout variant="accountStatement">
      <LayoutItem variant="fadeIn" delay="200" area="header">
        <Back history={history} path="/account/546126722" />
        <Heading level="2">
          <TranslatedText
            i18nKey="AccountStatementHeading"
            fallback="Kontoutskrift"
          />
        </Heading>
      </LayoutItem>
      <LayoutItem variant="fadeIn" delay="400" area="menu">
        <AccountFilter account={account} />
      </LayoutItem>
      <LayoutItem variant="fadeIn" delay="600" area="main">
        <Transactions
          transactions={account.transactions}
          availableBalance={account.availableBalance}
          accountType={account.accountType}
        />
      </LayoutItem>
    </Layout>
  )
}

export default LoanStatement
