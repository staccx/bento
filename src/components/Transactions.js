import PropTypes from "prop-types"
import React, { Component } from "react"
import styled from "styled-components"
import { inject, observer } from "mobx-react"
import ShowMore from "@tedconf/react-show-more"
import { Button, Box } from "@staccx/base"
import { color, spacing } from "@staccx/theme"
import TransactionListItem from "./TransactionList/TransactionList.item"
import TransactionListExpanded from "./TransactionList/TransactionList.expanded"

@inject("account")
@observer
class Transactions extends Component {
  static propTypes = {
    account: PropTypes.object
  }

  render() {
    return (
      <Container variant="dashboardBox">
        <ShowMore items={this.props.account.transactions} by={3}>
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
                  >
                    <TransactionListExpanded
                      date={transaction.date}
                      amount={transaction.amount}
                      message={transaction.message}
                      toAccount={transaction.toAccount}
                      fromAccount={transaction.fromAccount}
                    />
                  </TransactionListItem>
                ))}
              </List>
              {onMore ? (
                <Button
                  variant="expand"
                  onClick={() => {
                    if (onMore) onMore()
                  }}
                >
                  Flere transaksjoner
                </Button>
              ) : (
                <NoMore>Ingen flere transaksjoner</NoMore>
              )}
            </React.Fragment>
          )}
        </ShowMore>
      </Container>
    )
  }
}

const NoMore = styled.span`
  display: block;
  padding: ${spacing.small};
  text-align: center;
  color: ${color.wcag};
`

const Container = styled(Box)`
  padding: 0;
`

const List = styled.ol`
  list-style-type: none;
  margin: 0;
`

export default Transactions
