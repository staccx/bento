import React from "react"
import PropTypes from "prop-types"
import { formatCurrency } from "@staccx/formatting"
import { AccountInfoListItem, Strong } from "./Account.Info"

const AccountInfoLoan = ({ account, toggleInfo }) => (
  <React.Fragment>
    <AccountInfoListItem emphasize>
      <Strong>Kontonummer for innbetaling: </Strong>
      <div>{account.accountNo}</div>
    </AccountInfoListItem>
    <AccountInfoListItem emphasize>
      <Strong>KID: </Strong>
      <div>{account.kid}</div>
    </AccountInfoListItem>
    <AccountInfoListItem>
      <Strong>Restlån:</Strong>
      <div>{formatCurrency(account.availableBalance, { precision: 2 })}</div>
    </AccountInfoListItem>
    <AccountInfoListItem>
      <Strong>Effektiv rente: </Strong>
      <div>{account.effectiveRate}%</div>
    </AccountInfoListItem>
    <AccountInfoListItem>
      <Strong>Nominell rente: </Strong>
      <div>{account.interestRate}%</div>
    </AccountInfoListItem>
    <AccountInfoListItem>
      <Strong>Månedlig beløp: </Strong>
      <div>{formatCurrency(account.nextTermAmount, { precision: 2 })}</div>
    </AccountInfoListItem>
    <AccountInfoListItem>
      <Strong>Neste forfallsdato: </Strong>
      <div>{account.nextDueDate}</div>
    </AccountInfoListItem>
  </React.Fragment>
)

AccountInfoLoan.propTypes = {
  account: PropTypes.object.isRequired
}

export default AccountInfoLoan
