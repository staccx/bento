import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { color } from "@staccx/theme"
import { formatCurrency } from "@staccx/formatting"
import { List, SplitListItem } from "@staccx/base"

const TransactionListItem = ({
  amount,
  fromAccount,
  toAccount,
  message,
  date,
  fee,
  rent,
  installments,
  type
}) => (
  <Outer>
    <List>
      {rent && (
        <SplitListItem>
          <div>Renter</div>
          <div>{rent}</div>
        </SplitListItem>
      )}
      {installments && (
        <SplitListItem>
          <div>Avdrag</div>
          <div>{installments}</div>
        </SplitListItem>
      )}
      {fee && (
        <SplitListItem>
          <div>Gebyr</div>
          <div>{fee}</div>
        </SplitListItem>
      )}
      <SplitListItem>
        <div>Beløp:</div>
        <div>{formatCurrency(amount, { precision: 2 })}</div>
      </SplitListItem>
      <SplitListItem>
        <div>
          {type === "DEPOSIT" && "Bokført dato:"}
          {type === "WITHDRAWAL" && "Bokført dato:"}
          {type === "INVOICE" && "Forfallsdato:"}
        </div>
        <div>{date}</div>
      </SplitListItem>
      <SplitListItem>
        <div>{toAccount ? "Til konto:" : "Fra konto:"}</div>
        <div>{toAccount || fromAccount}</div>
      </SplitListItem>
    </List>
  </Outer>
)

const Outer = styled.div`
  background-color: ${color("expandedItem")};
`

TransactionListItem.propTypes = {
  date: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
}

export default TransactionListItem
