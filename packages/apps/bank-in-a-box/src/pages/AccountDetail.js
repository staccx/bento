import React from "react"
import { Layout, Wrapper } from "@staccx/base"
import Account from "../components/Account"
import AccountInfo from "../components/Account.Info"
import { ThemeComponent } from "@staccx/theme"
import menuLoan from "../data/menuLoan"
import menuDeposit from "../data/menuDeposit"

const AccountDetail = ({ account, history }) => {
  const menu =
    account.accountType === "LOAN"
      ? menuLoan(account.accountId)
      : menuDeposit(account.accountId)

  return (
    <Wrapper variant="bib">
      <Layout>
        <Account account={account} />
        <ThemeComponent
          tagName={"menu"}
          menuElements={menu}
          history={history}
        />
        <AccountInfo account={account} />
      </Layout>
    </Wrapper>
  )
}

export default AccountDetail
