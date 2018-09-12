import React from "react"
import PropTypes from "prop-types"
import { formatCurrency } from "@staccx/formatting"
import { AccountInfoListItem, Strong } from "./Account.Info"

const AccountInfoDeposit = ({ account }) => (
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
      <Strong>Disponibelt beløp:</Strong>
      <div>{formatCurrency(account.availableBalance, { precision: 2 })}</div>
    </AccountInfoListItem>
    <AccountInfoListItem>
      <Strong>Bokført saldo: </Strong>
      <div>{formatCurrency(account.bookedBalance, { precision: 2 })}</div>
    </AccountInfoListItem>
    <AccountInfoListItem>
      <Strong>Ikke bokført rente: </Strong>
      <div>{formatCurrency(account.accruedInterest, { precision: 2 })}</div>
    </AccountInfoListItem>
    <AccountInfoListItem>
      <Strong>Effektiv rente: </Strong>
      <div>{account.effectiveRate}%</div>
    </AccountInfoListItem>
    <AccountInfoListItem>
      <Strong>Nominell rente: </Strong>
      <div>{account.interestRate}%</div>
    </AccountInfoListItem>
  </React.Fragment>
)

AccountInfoDeposit.propTypes = {
  account: PropTypes.object.isRequired
}

export default AccountInfoDeposit
