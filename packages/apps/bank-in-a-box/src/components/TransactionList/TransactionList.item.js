import React from "react"
import PropTypes from "prop-types"
import { ExpandListItem } from "@staccx/base"

const TransactionListItem = ({ children, amount, ...rest }) => (
  <ExpandListItem variant="transactionListItem" amount={amount} {...rest}>
    {children}
  </ExpandListItem>
)

TransactionListItem.propTypes = {
  heading: PropTypes.string,
  date: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
}

export default TransactionListItem
