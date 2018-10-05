import React from "react"
import { Layout, Wrapper, LayoutItem, ThemeComponent } from "@staccx/base"
import Account from "../components/Account"
import AccountInfo from "../components/Account.Info"
import menuLoan from "../data/menuLoan"
import menuDeposit from "../data/menuDeposit"
import Back from "../components/Back"

const AccountDetail = ({ account, history }) => {
  const menu =
    account.accountType === "LOAN"
      ? menuLoan(account.accountId)
      : menuDeposit(account.accountId)

  return (
    <Wrapper variant="bib">
      <Layout>
        <LayoutItem variant="fadeIn" delay="200">
          <div>
            <Back history={history} path="/" />
          </div>
          <Account account={account} />
        </LayoutItem>
        <LayoutItem variant="fadeIn" delay="400">
          <ThemeComponent
            tagName={"menu"}
            menuElements={menu}
            history={history}
          />
        </LayoutItem>
        <LayoutItem variant="fadeIn" delay="600">
          <AccountInfo account={account} />
        </LayoutItem>
      </Layout>
    </Wrapper>
  )
}

export default AccountDetail
