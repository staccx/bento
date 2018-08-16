import React from "react"
import PropTypes from "prop-types"
import { List } from "@staccx/base"
import { spacing, color } from "@staccx/theme"
import styled from "styled-components"

const InvoiceCalculation = ({ netAmount, vat, discount, sum }) => (
  <div>
    <List variant="invoiceCalculation">
      <li>
        <span>Nettobeløp: </span>
        <span>{netAmount}</span>
      </li>
      <li>
        <span>Merverdiavgift (25%): </span>
        <span>{vat}</span>
      </li>
      <li>
        <span>Rabatt (0 %)</span>
        <span>{discount}</span>
      </li>
      <li>
        <span>Å betale: </span>
        <span>{sum}</span>
      </li>
    </List>
  </div>
)

InvoiceCalculation.propTypes = {
  netAmount: PropTypes.number,
  vat: PropTypes.number,
  discount: PropTypes.number,
  sum: PropTypes.number
}

InvoiceCalculation.defaultProps = {
  netAmount: 571.5,
  vat: 117.25,
  discount: 0,
  sum: 693.75
}

export default InvoiceCalculation
