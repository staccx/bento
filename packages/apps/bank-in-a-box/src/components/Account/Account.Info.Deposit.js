import React from "react"
import PropTypes from "prop-types"
import { Text, SplitListItem } from "@staccx/base"
import { formatCurrency } from "@staccx/formatting"
import { TranslatedText } from "@staccx/i18n"

const AccountInfoDeposit = ({ account }) => (
  <React.Fragment>
    <SplitListItem variant="accountInfoListItem" emphasize>
      <Text variant="strong">
        <TranslatedText
          i18nKey="ACCOUNTNUMBER"
          fallback="Kontonummer for innbetaling"
        />
        :
      </Text>
      <div>{account.accountNo}</div>
    </SplitListItem>
    <SplitListItem variant="accountInfoListItem" emphasize>
      <Text variant="strong">
        <TranslatedText i18nKey="KID" fallback="KID" />:
      </Text>
      <div>{account.kid}</div>
    </SplitListItem>
    <SplitListItem variant="accountInfoListItem">
      <Text variant="strong">
        <TranslatedText
          i18nKey="AvailableBalace"
          fallback="Disponibelt beløp"
        />
        :{" "}
      </Text>
      <div>{formatCurrency(account.availableBalance, { precision: 2 })}</div>
    </SplitListItem>
    <SplitListItem variant="accountInfoListItem">
      <Text variant="strong">
        <TranslatedText i18nKey="BookedBalance" fallback="Bokført saldo" />:{" "}
      </Text>
      <div>{formatCurrency(account.bookedBalance, { precision: 2 })}</div>
    </SplitListItem>
    <SplitListItem variant="accountInfoListItem">
      <Text variant="strong">
        <TranslatedText
          i18nKey="AccruedInterest"
          fallback="Ikke bokført rente"
        />
        :{" "}
      </Text>
      <div>{formatCurrency(account.accruedInterest, { precision: 2 })}</div>
    </SplitListItem>
    <SplitListItem variant="accountInfoListItem">
      <Text variant="strong">
        <TranslatedText i18nKey="effectiveRate" fallback="Effektiv rente" />:{" "}
      </Text>
      <div>{account.effectiveRate}%</div>
    </SplitListItem>
    <SplitListItem variant="accountInfoListItem">
      <Text variant="strong">
        <TranslatedText i18nKey="InterestRate" fallback="Nominell rente" />:{" "}
      </Text>
      <div>{account.interestRate}%</div>
    </SplitListItem>
  </React.Fragment>
)

AccountInfoDeposit.propTypes = {
  account: PropTypes.object.isRequired
}

export default AccountInfoDeposit
