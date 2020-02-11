import React from "react"
import { Heading, SplitListItem, Text, Alert } from "@staccx/base"
import { TranslatedText } from "@staccx/i18n"
import { formatCurrency, removeWhitespace, dashIt } from "@staccx/formatting"

const AnnualStatementList = ({ statement }) => {
  if (!statement) {
    return (
      <Alert>
        <TranslatedText i18nKey={"ingen-argsoppgaver"}>
          Ingen årsoppgaver valgt eller ingen i listen
        </TranslatedText>
      </Alert>
    )
  }
  return statement.items.map(item => {
    return (
      <React.Fragment key={item.name}>
        <SplitListItem variant="annualStatementListItem" heading>
          <Heading level="2" variant="annualStatmentHeading">
            <TranslatedText i18nKey={dashIt(item.name)}>
              {item.name}
            </TranslatedText>
          </Heading>
        </SplitListItem>
        <SplitListItem variant="annualStatementListItem" emphasize>
          <Text>{item.description}</Text>
          <div>
            {formatCurrency(parseInt(removeWhitespace(item.value), 10))}
          </div>
        </SplitListItem>
      </React.Fragment>
    )
  })
}
export default AnnualStatementList
