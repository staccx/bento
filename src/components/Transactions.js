import PropTypes from "prop-types"
import React, { Component } from "react"
import TransactionList from "./TransactionList/TransactionList"
import TransactionListItem from "./TransactionList/TransactionList.item"
import TransactionListExpanded from "./TransactionList/TransactionList.expanded"
import { inject, observer } from "mobx-react"

@inject("account")
@observer
class Transactions extends Component {
  static propTypes = {
    account: PropTypes.object
  }

  render() {
    return (
      <TransactionList>
        {this.props.account.transactions.map(transaction => (
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
      </TransactionList>
    )
  }
}

export default Transactions
