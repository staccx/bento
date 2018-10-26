import React from "react"
import PropTypes from "prop-types"
import { SplitListItem, Text } from "@staccx/base"
import { formatCurrency } from "@staccx/formatting"

const AccountInfoLoan = ({ account, toggleInfo }) => (
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
      <Text variant="strong">Restlån:</Text>
      <div>{formatCurrency(account.availableBalance, { precision: 2 })}</div>
    </SplitListItem>
    <SplitListItem variant="accountInfoListItem">
      <Text variant="strong">Effektiv rente: </Text>
      <div>{account.effectiveRate}%</div>
    </SplitListItem>
    <SplitListItem variant="accountInfoListItem">
      <Text variant="strong">Nominell rente: </Text>
      <div>{account.interestRate}%</div>
    </SplitListItem>
    <SplitListItem variant="accountInfoListItem">
      <Text variant="strong">Månedlig beløp: </Text>
      <div>{formatCurrency(account.nextTermAmount, { precision: 2 })}</div>
    </SplitListItem>
    <SplitListItem variant="accountInfoListItem">
      <Text variant="strong">Neste forfallsdato: </Text>
      <div>{account.nextDueDate}</div>
    </SplitListItem>
  </React.Fragment>
)

AccountInfoLoan.propTypes = {
  account: PropTypes.object.isRequired
}

export default AccountInfoLoan
