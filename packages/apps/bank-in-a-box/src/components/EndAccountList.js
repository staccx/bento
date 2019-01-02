import React from "react"
import PropTypes from "prop-types"
import { Text, SplitListItem } from "@staccx/base"
import { formatCurrency } from "@staccx/formatting"
import { TranslatedText } from "@staccx/i18n"

const EndAccountList = ({ bookedBalance, accruedInterest }) => {
  const payBack = bookedBalance + accruedInterest
  return (
    <React.Fragment>
      <SplitListItem variant="annualStatementListItem" emphasize>
        <Text>
          <TranslatedText
            i18nKey="BookedBalanceEndText"
            fallback="Bokført saldo"
          />
          :
        </Text>
        <div>
          {formatCurrency(bookedBalance, { precision: 2, decimal: "," })}
        </div>
      </SplitListItem>
      <SplitListItem variant="annualStatementListItem" emphasize>
        <Text variant="strong">
          <TranslatedText
            i18nKey="AccruedInterestEndText"
            fallback="Ikke bokført rente"
          />
          :
        </Text>
        <div>
          {formatCurrency(accruedInterest, { precision: 2, decimal: "," })}
        </div>
      </SplitListItem>
      <SplitListItem variant="annualStatementListItem" emphasize>
        <Text variant="heavy">
          <TranslatedText i18nKey="TotalEndText" fallback="Totalt" />:
        </Text>
        <strong>
          {formatCurrency(payBack, { precision: 2, decimal: "," })}
        </strong>
      </SplitListItem>
    </React.Fragment>
  )
}

EndAccountList.defaultProps = {
  bookedBalance: 0,
  accruedInterest: 0
}

EndAccountList.propTypes = {
  bookedBalance: PropTypes.number,
  accruedInterest: PropTypes.number
}

export default EndAccountList
