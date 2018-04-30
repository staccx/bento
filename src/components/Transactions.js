import PropTypes from 'prop-types'
import React, { Component } from 'react'
import TransactionList from './TransactionList/TransactionList'
import TransactionListItem from './TransactionList/TransactionList.item'
import {inject, observer} from "mobx-react"

@inject("account") @observer
class Transactions extends Component {
  static propTypes = {
    account: PropTypes.object
  }

  render () {
    return (
      <TransactionList>
        {this.props.account.transactions.map(transaction => (
          <TransactionListItem
            heading={transaction.heading}
            date={transaction.date}
            amount={transaction.amount}
            key={transaction._id}
          />
        ))}
      </TransactionList>
    )
  }
}

export default Transactions
