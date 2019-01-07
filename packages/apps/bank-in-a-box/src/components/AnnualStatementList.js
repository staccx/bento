import React from "react"
import { Heading, SplitListItem, Text, Loading } from "@staccx/base"
import { formatCurrency, removeWhitespace } from "@staccx/formatting"
import { TranslatedText } from "@staccx/i18n"

const AnnualStatementList = ({ statement }) => {
  if (!statement) {
    return <Loading />
  }
  console.log(statement)
  return statement.items.map(item => (
    <React.Fragment>
      <SplitListItem variant="annualStatementListItem" heading>
        <Heading level="2" variant="annualStatmentHeading">
          <TranslatedText i18nKey="ANNUAL_STATEMENT_3">
            {item.name}
          </TranslatedText>
        </Heading>
      </SplitListItem>
      <SplitListItem variant="annualStatementListItem" emphasize>
        <Text>
          <TranslatedText i18nKey="ANNUAL_STATEMENT_3_1_1">
            {item.description}
          </TranslatedText>
        </Text>
        <div>{formatCurrency(parseInt(removeWhitespace(item.value), 10))}</div>
      </SplitListItem>
    </React.Fragment>
  ))
}
export default AnnualStatementList
