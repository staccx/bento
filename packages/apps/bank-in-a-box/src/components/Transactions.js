import PropTypes from "prop-types"
import React, { Component } from "react"
import styled from "styled-components"
import ShowMore from "@tedconf/react-show-more"
import { Button, Box } from "@staccx/base"
import { TranslatedText } from "@staccx/i18n"
import TransactionListItem from "./TransactionList/TransactionList.item"
import TransactionListExpanded from "./TransactionList/TransactionList.expanded"

class Transactions extends Component {
  static propTypes = {
    account: PropTypes.object
  }

  render() {
    return (
      <Box variant="dashboardBox">
        <ShowMore items={this.props.transactions} by={3}>
          {({ current, onMore }) => (
            <React.Fragment>
              <List>
                {current.map(transaction => (
                  <TransactionListItem
                    title={transaction._id}
                    heading={transaction.heading}
                    date={transaction.friendlyDate}
                    amount={transaction.amount}
                    key={transaction._id}
                    type={transaction.type}
                  >
                    <TransactionListExpanded
                      date={transaction.date}
                      amount={transaction.amount}
                      message={transaction.message}
                      toAccount={transaction.toAccount}
                      fromAccount={transaction.fromAccount}
                      rent={transaction.rent}
                      installments={transaction.installments}
                      fee={transaction.fee}
                      type={transaction.type}
                    />
                  </TransactionListItem>
                ))}
              </List>
              {onMore && (
                <Button
                  variant="expand"
                  onClick={() => {
                    if (onMore) onMore()
                  }}
                >
                  <TranslatedText
                    i18nKey="LoadMoreTransactionButtonText"
                    fallback="Flere transaksjoner"
                  />
                </Button>
              )}
            </React.Fragment>
          )}
        </ShowMore>
      </Box>
    )
  }
}

const List = styled.ol`
  list-style-type: none;
  margin: 0;
`

export default Transactions
