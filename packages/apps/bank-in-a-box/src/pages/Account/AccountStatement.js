import React from "react"
import { Layout, Wrapper, Heading, Button, LayoutItem } from "@staccx/base"
import { backwards } from "../../components/transitions/transitions"
import AccountFilter from "../../components/AccountFilter"
import Transactions from "../../components/Transactions"
import Back from "../../components/Back"
import { TranslatedText } from "@staccx/i18n"

const LoanStatement = ({ history, account, transactions }) => {
  return (
    <Wrapper variant="bib">
      <Layout>
        <LayoutItem variant="fadeIn" delay="200">
          <Back history={history} path="/account/546126722" />
          <Heading level="2">
            <TranslatedText
              i18nKey="AccountStatementHeading"
              fallback="Kontoutskrift"
            />
          </Heading>
        </LayoutItem>
        <LayoutItem variant="fadeIn" delay="400">
          <AccountFilter account={account} />
        </LayoutItem>
        <LayoutItem variant="fadeIn" delay="600">
          <Transactions transactions={account.transactions} />
        </LayoutItem>
        <LayoutItem variant="fadeIn" delay="800">
          <Button
            onClick={() =>
              history.push({
                pathname: "/account/546126722",
                state: backwards
              })
            }
          >
            <TranslatedText i18nKey="BackTextButton" fallback="Tilbake" />
          </Button>
        </LayoutItem>
      </Layout>
    </Wrapper>
  )
}

export default LoanStatement
