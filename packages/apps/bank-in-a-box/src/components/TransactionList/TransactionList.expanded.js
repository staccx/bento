import React from "react"
import PropTypes from "prop-types"
import { formatCurrency } from "@staccx/formatting"
import { List, SplitListItem } from "@staccx/base"
import { TranslatedText } from "@staccx/i18n"

const TransactionListItem = ({
  amount,
  accountNo,
  date,
  fee,
  rent,
  installments,
  type
}) => (
  <List>
    {rent && (
      <SplitListItem>
        <div>
          <TranslatedText i18nKey="renter" fallback="Renter" />:
        </div>
        <div>{rent}</div>
      </SplitListItem>
    )}
    {installments && (
      <SplitListItem>
        <div>
          <TranslatedText i18nKey="avdrag" fallback="Avdrag" />:
        </div>
        <div>{installments}</div>
      </SplitListItem>
    )}
    {fee && (
      <SplitListItem>
        <div>
          <TranslatedText i18nKey="gebyr" fallback="Gebyr" />:
        </div>
        <div>{fee}</div>
      </SplitListItem>
    )}
    <SplitListItem>
      <div>
        <TranslatedText i18nKey="belop" fallback="Beløp" />:
      </div>
      <div>{formatCurrency(amount, { precision: 2 })}</div>
    </SplitListItem>
    <SplitListItem>
      <div>
        <TranslatedText i18nKey="bokfort-dato" fallback="Bokført dato" />
      </div>
      <div>{date}</div>
    </SplitListItem>
    {type === "Transactions" && (
      <SplitListItem>
        <div>
          <TranslatedText i18nKey="kontonummer" fallback="Fra konto" />
        </div>
        <div>{accountNo}</div>
      </SplitListItem>
    )}
  </List>
)

TransactionListItem.propTypes = {
  date: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
}

export default TransactionListItem
