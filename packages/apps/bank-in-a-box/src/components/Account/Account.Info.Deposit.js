import React from "react"
import PropTypes from "prop-types"
import { Text, SplitListItem } from "@staccx/base"
import { formatCurrency } from "@staccx/formatting"

const AccountInfoDeposit = ({ account }) => (
  <React.Fragment>
    <SplitListItem variant="accountInfoListItem" emphasize>
      <Text variant="strong">Kontonummer for innbetaling: </Text>
      <div>{account.accountNo}</div>
    </SplitListItem>
    <SplitListItem variant="accountInfoListItem" emphasize>
      <Text variant="strong">KID: </Text>
      <div>{account.kid}</div>
    </SplitListItem>
    <SplitListItem variant="accountInfoListItem">
      <Text variant="strong">Disponibelt beløp:</Text>
      <div>{formatCurrency(account.availableBalance, { precision: 2 })}</div>
    </SplitListItem>
    <SplitListItem variant="accountInfoListItem">
      <Text variant="strong">Bokført saldo: </Text>
      <div>{formatCurrency(account.bookedBalance, { precision: 2 })}</div>
    </SplitListItem>
    <SplitListItem variant="accountInfoListItem">
      <Text variant="strong">Ikke bokført rente: </Text>
      <div>{formatCurrency(account.accruedInterest, { precision: 2 })}</div>
    </SplitListItem>
    <SplitListItem variant="accountInfoListItem">
      <Text variant="strong">Effektiv rente: </Text>
      <div>{account.effectiveRate}%</div>
    </SplitListItem>
    <SplitListItem variant="accountInfoListItem">
      <Text variant="strong">Nominell rente: </Text>
      <div>{account.interestRate}%</div>
    </SplitListItem>
  </React.Fragment>
)

AccountInfoDeposit.propTypes = {
  account: PropTypes.object.isRequired
}

export default AccountInfoDeposit
