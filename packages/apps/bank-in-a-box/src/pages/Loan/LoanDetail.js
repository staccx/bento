import React from "react"
import { Layout, Wrapper, LayoutItem } from "@staccx/base"
import Loan from "../../components/Loan"
import AccountInfo from "../../components/Account.Info"
import { ThemeComponent } from "@staccx/theme"
import menuLoan from "../../data/menuLoan"
import Back from "../../components/Back"

const LoanDetail = ({ account, history }) => {
  const menu = menuLoan(account.accountId)

  return (
    <Wrapper variant="bib">
      <Layout>
        <LayoutItem variant="fadeIn" delay="200">
          <div>
            <Back history={history} path="/" />
          </div>
          <Loan account={account} />
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

export default LoanDetail
