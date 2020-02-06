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
          i18nKey="kontonummer-innbetaling"
          fallback="Kontonummer for innbetaling"
        />
      </Text>
      <div>{account.accountNo}</div>
    </SplitListItem>
    <SplitListItem variant="accountInfoListItem" emphasize>
      <Text variant="strong">
        <TranslatedText i18nKey="kid">KID:</TranslatedText>
      </Text>
      <div>{account.kid}</div>
    </SplitListItem>
    <SplitListItem variant="accountInfoListItem">
      <Text variant="strong">
        <TranslatedText
          i18nKey="disponibelt-belop"
          fallback="Disponibelt beløp"
        />
      </Text>
      <div>{formatCurrency(account.availableBalance, { precision: 2 })}</div>
    </SplitListItem>
    <SplitListItem variant="accountInfoListItem">
      <Text variant="strong">
        <TranslatedText i18nKey="bokfort-saldo" fallback="Bokført saldo" />
      </Text>
      <div>{formatCurrency(account.bookedBalance, { precision: 2 })}</div>
    </SplitListItem>
    <SplitListItem variant="accountInfoListItem">
      <Text variant="strong">
        <TranslatedText
          i18nKey="ikke-bokfort-rente"
          fallback="Ikke bokført rente"
        />
      </Text>
      <div>{formatCurrency(account.accruedInterest, { precision: 2 })}</div>
    </SplitListItem>
    <SplitListItem variant="accountInfoListItem">
      <Text variant="strong">
        <TranslatedText i18nKey="effektiv-rente" fallback="Effektiv rente" />
      </Text>
      <div>{formatCurrency(account.effectiveRate, { precision: 2 })}%</div>
    </SplitListItem>
    <SplitListItem variant="accountInfoListItem">
      <Text variant="strong">
        <TranslatedText i18nKey="nominell-rente" fallback="Nominell rente" />
      </Text>
      <div>{formatCurrency(account.interestRate, { precision: 2 })}%</div>
    </SplitListItem>
  </React.Fragment>
)

AccountInfoDeposit.propTypes = {
  account: PropTypes.object.isRequired
}

export default AccountInfoDeposit
