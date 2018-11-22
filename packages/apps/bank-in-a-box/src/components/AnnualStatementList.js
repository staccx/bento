import React from "react"
import PropTypes from "prop-types"
import { Heading, Text, SplitListItem } from "@staccx/base"
import { formatCurrency } from "@staccx/formatting"
import { TranslatedText } from "@staccx/i18n"

const AnnualStatementList = ({ interestYearly, depositedYearly }) => (
  <React.Fragment>
    <SplitListItem variant="annualStatementListItem" heading>
      <Heading level="2" variant="annualStatmentHeading">
        <TranslatedText
          i18nKey="ANNUAL_STATEMENT_3"
          fallback="3. Inntekter/Fradrag"
        />
      </Heading>
    </SplitListItem>
    <SplitListItem variant="annualStatementListItem" emphasize>
      <Text>
        <TranslatedText
          i18nKey="ANNUAL_STATEMENT_3_1_1"
          fallback="3.1.1	Renter av bankinnskudd"
        />
      </Text>
      <div>{formatCurrency(interestYearly)}</div>
    </SplitListItem>
    <SplitListItem variant="annualStatementListItem" heading>
      <Heading level="2" variant="annualStatmentHeading">
        <TranslatedText
          i18nKey="ANNUAL_STATEMENT_4"
          fallback="4. Formue/Gjeld"
        />
      </Heading>
    </SplitListItem>
    <SplitListItem variant="annualStatementListItem" emphasize>
      <Text variant="strong">
        <TranslatedText
          i18nKey="ANNUAL_STATEMENT_4_1_1"
          fallback="4.1.1	Sum bankinnskudd"
        />
        :
      </Text>
      <div>{formatCurrency(depositedYearly)}</div>
    </SplitListItem>
  </React.Fragment>
)

AnnualStatementList.defaultProps = {
  interestYearly: 2776.94,
  depositedYearly: 122776.94
}

AnnualStatementList.propTypes = {
  interestYearly: PropTypes.number,
  depositedYearly: PropTypes.number
}

export default AnnualStatementList
