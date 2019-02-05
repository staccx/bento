import React from "react"
import { Heading, SplitListItem, Text, Loading } from "@staccx/base"
import { formatCurrency, removeWhitespace } from "@staccx/formatting"
import { TranslatedText } from "@staccx/i18n"

const AnnualStatementList = ({ statement }) => {
  if (!statement) {
    return <Loading />
  }
  return statement.items.map(item => (
    <React.Fragment key={item.name}>
      <SplitListItem variant="annualStatementListItem" heading>
        <Heading level="2" variant="annualStatmentHeading">
          <TranslatedText i18nKey="arsrapport-overskrift">
            {item.name}
          </TranslatedText>
        </Heading>
      </SplitListItem>
      <SplitListItem variant="annualStatementListItem" emphasize>
        <Text>
          <TranslatedText i18nKey="arsrapport-beskrivelse">
            {item.description}
          </TranslatedText>
        </Text>
        <div>{formatCurrency(parseInt(removeWhitespace(item.value), 10))}</div>
      </SplitListItem>
    </React.Fragment>
  ))
}
export default AnnualStatementList
