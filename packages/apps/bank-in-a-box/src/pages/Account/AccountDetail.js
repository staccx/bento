import React from "react"
import {
  Layout,
  Wrapper,
  LayoutItem,
  ThemeComponent,
  Box,
  List
} from "@staccx/base"
import Account from "../../components/Account/Account"
import menuDeposit from "../../data/menuDeposit"
import Back from "../../components/Back"
import AccountInfoDeposit from "../../components/Account/Account.Info.Deposit"

const AccountDetail = ({ account, history }) => {
  const menu = menuDeposit(account.accountId)

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
          <Box variant="accountInfoOuter">
            <Box variant={"accountInfo"}>
              <List>
                <AccountInfoDeposit account={account} />
              </List>
            </Box>
          </Box>
        </LayoutItem>
      </Layout>
    </Wrapper>
  )
}

export default AccountDetail
