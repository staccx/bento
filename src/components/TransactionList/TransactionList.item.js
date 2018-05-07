import React from "react"
import PropTypes from "prop-types"
import { ExpandListItem } from "@staccx/base"

const TransactionListItem = ({ children, amount, ...rest }) => (
  <ExpandListItem amount={amount} {...rest}>
    {children}
  </ExpandListItem>
)

TransactionListItem.propTypes = {
  heading: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
}

export default TransactionListItem
