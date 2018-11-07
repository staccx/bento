import React from "react"
import PropTypes from "prop-types"
import { formatCurrency } from "@staccx/formatting"
import { List, SplitListItem } from "@staccx/base"
import { TranslatedText } from "@staccx/i18n"

const TransactionListItem = ({
  amount,
  fromAccount,
  toAccount,
  message,
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
          <TranslatedText i18nKey="Rent" fallback="Renter" />:
        </div>
        <div>{rent}</div>
      </SplitListItem>
    )}
    {installments && (
      <SplitListItem>
        <div>
          <TranslatedText i18nKey="Installments" fallback="Avdrag" />:
        </div>
        <div>{installments}</div>
      </SplitListItem>
    )}
    {fee && (
      <SplitListItem>
        <div>
          <TranslatedText i18nKey="Fee" fallback="Gebyr" />:
        </div>
        <div>{fee}</div>
      </SplitListItem>
    )}
    <SplitListItem>
      <div>
        <TranslatedText i18nKey="Amount" fallback="Beløp" />:
      </div>
      <div>{formatCurrency(amount, { precision: 2 })}</div>
    </SplitListItem>
    <SplitListItem>
      <div>
        {type === "DEPOSIT" && (
          <TranslatedText i18nKey="DateDeposit" fallback="Bokført dato" />
        )}
        {type === "WITHDRAWAL" && (
          <TranslatedText i18nKey="DateWithdrawal" fallback="Bokført dato" />
        )}
        {type === "INVOICE" && (
          <TranslatedText i18nKey="DateInvoice" fallback="Forfallsdato" />
        )}
        :
      </div>
      <div>{date}</div>
    </SplitListItem>
    <SplitListItem>
      <div>
        {toAccount ? (
          <TranslatedText i18nKey="toAccount" fallback="Til konto" />
        ) : (
          <TranslatedText i18nKey="fromAccount" fallback="Fra konto" />
        )}
      </div>
      <div>{toAccount || fromAccount}</div>
    </SplitListItem>
  </List>
)

TransactionListItem.propTypes = {
  date: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
}

export default TransactionListItem
