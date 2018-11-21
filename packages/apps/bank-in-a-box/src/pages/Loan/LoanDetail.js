import React from "react"
import { Layout, LayoutItem, ThemeComponent, Box, List } from "@staccx/base"
import Loan from "../../components/Loan/Loan"
import menuLoan from "../../data/menuLoan"
import Back from "../../components/Back"
import AccountInfoLoan from "../../components/Loan/Account.Info.Loan"

const LoanDetail = ({ account, history }) => {
  const menu = menuLoan(account.accountId)

  return (
    <Layout variant="loanDetail">
      <LayoutItem variant="fadeIn" delay="200" area="header">
        <div>
          <Back history={history} path="/" />
        </div>
        <Loan account={account} />
      </LayoutItem>
      <LayoutItem variant="fadeIn" delay="400" area="menu">
        <ThemeComponent
          tagName={"menu"}
          menuElements={menu}
          history={history}
        />
      </LayoutItem>
      <LayoutItem variant="fadeIn" delay="600" area="main">
        <Box variant="accountInfoOuter">
          <Box variant={"accountInfo"}>
            <List>
              <AccountInfoLoan account={account} />
            </List>
          </Box>
        </Box>
      </LayoutItem>
    </Layout>
  )
}

export default LoanDetail
