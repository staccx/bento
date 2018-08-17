import React from "react"
import PropTypes from "prop-types"
import { List } from "@staccx/base"

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
        <span>{sums.net + sums.vat > 0 ? sums.net + sums.vat : 0}</span>
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
