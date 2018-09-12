import React from "react"
import PropTypes from "prop-types"
import { ExpandListItem } from "@staccx/base"

const InvoiceListItem = ({ children, title, ...rest }) => (
  <ExpandListItem variant="transactionListItem" title={title} {...rest}>
    {children}
  </ExpandListItem>
)

InvoiceListItem.propTypes = {
  heading: PropTypes.string,
  date: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
}

export default InvoiceListItem
