import React from "react"
import PropTypes from "prop-types"
import { List } from "@staccx/base"

const calculateTotal = (net, vat, discount) => {
  const sum = net + vat + discount
  return sum > 0 ? sum.toFixed(2) : sum
}

const InvoiceCalculation = ({ sums }) => (
  <div>
    <List variant="invoiceCalculation">
      <li>
        <span>Nettobeløp: </span>
        <span>{sums.net > 0 ? sums.net.toFixed(2) : sums.net}</span>
      </li>
      <li>
        <span>Merverdiavgift (25%): </span>
        <span>{sums.vat > 0 ? sums.vat.toFixed(2) : sums.vat}</span>
      </li>
      <li>
        <span>Rabatt (0 %)</span>
        <span>{sums.discount}</span>
      </li>
      <li>
        <span>Å betale: </span>
        <span>{calculateTotal(sums.net, sums.vat, sums.discount)}</span>
      </li>
    </List>
  </div>
)

InvoiceCalculation.propTypes = {
  sums: PropTypes.shape({
    net: PropTypes.number.isRequired,
    vat: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired
  }).isRequired
}

export default InvoiceCalculation
