import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { color } from "@staccx/theme"
import { List, SplitListItem } from "@staccx/base"

const TransactionListItem = ({
  amount,
  fromAccount,
  toAccount,
  message,
  date,
  fee,
  rent,
  installments
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
        <div>Totalt:</div>
        <div>{amount}</div>
      </SplitListItem>
      <SplitListItem>
        <div>Bokført dato:</div>
        <div>{date}</div>
      </SplitListItem>
      {!rent && (
        <SplitListItem>
          <div>{toAccount ? "Til konto:" : "Fra konto:"}</div>
          <div>{toAccount || fromAccount}</div>
        </SplitListItem>
      )}
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
