import React from "react"
import { Heading, SplitListItem, Text, Loading } from "@staccx/base"
import { formatCurrency, removeWhitespace } from "@staccx/formatting"

const AnnualStatementList = ({ statement }) => {
  if (!statement) {
    return <Loading />
  }
  return statement.items.map(item => (
    <React.Fragment key={item.name}>
      <SplitListItem variant="annualStatementListItem" heading>
        <Heading level="2" variant="annualStatmentHeading">
          {item.name}
        </Heading>
      </SplitListItem>
      <SplitListItem variant="annualStatementListItem" emphasize>
        <Text>{item.description}</Text>
        <div>{formatCurrency(parseInt(removeWhitespace(item.value), 10))}</div>
      </SplitListItem>
    </React.Fragment>
  ))
}
export default AnnualStatementList
