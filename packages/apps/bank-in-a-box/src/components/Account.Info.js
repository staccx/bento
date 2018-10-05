import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { Box, List, SplitListItem, theming } from "@staccx/base"
import { BounceIn } from "@staccx/animations"
import AccountInfoLoan from "./Account.Info.Loan"
import AccountInfoDeposit from "./Account.Info.Deposit"

const AccountInfo = ({ account, toggleInfo }) => {
  return (
    <Outer>
      <Box variant={"accountInfo"}>
        <List>
          {account.accountType === "LOAN" ? (
            <AccountInfoLoan account={account} />
          ) : (
            <AccountInfoDeposit account={account} />
          )}
        </List>
      </Box>
    </Outer>
  )
}

const Outer = styled.div`
  position: relative;
  opacity: 0;
  transform: translateY(-12px);
  z-index: 50;
  animation: 0.4s ${BounceIn} cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards 1;
`
export const Strong = styled.strong`
  font-weight: ${theming.fontWeight.normal};
`
export const AccountInfoListItem = styled(SplitListItem)`
  padding: 10px 0;
  border-color: ${theming.color("accountInfoBorder")};
  color: ${theming.color.wcag};
  ${p =>
    p.emphasize &&
    css`
      &,
      & ${Strong} {
        font-weight: ${theming.fontWeight.bold};
      }
    `};
`

AccountInfo.propTypes = {
  account: PropTypes.object.isRequired
}

export default AccountInfo
