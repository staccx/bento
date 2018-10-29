import React from "react"
import {
  Layout,
  Wrapper,
  LayoutItem,
  ThemeComponent,
  Box,
  List
} from "@staccx/base"
import Loan from "../../components/Loan/Loan"
import menuLoan from "../../data/menuLoan"
import Back from "../../components/Back"
import AccountInfoLoan from "../../components/Loan/Account.Info.Loan"

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
          <Box variant="accountInfoOuter">
            <Box variant={"accountInfo"}>
              <List>
                <AccountInfoLoan account={account} />
              </List>
            </Box>
          </Box>
        </LayoutItem>
      </Layout>
    </Wrapper>
  )
}

export default LoanDetail
