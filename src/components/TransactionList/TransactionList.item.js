import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { spacing, color } from "@staccx/theme"
import { formatCurrency } from "@staccx/formatting"

const TransactionListItem = ({ heading, date, amount }) => (
  <Item>
    <Icon type={amount > 0 ? "deposit" : "withdrawal"} />
    <Body>
      <h4>{heading}</h4>
      <div>{date}</div>
    </Body>
    <Amount>{formatCurrency(amount)}</Amount>
  </Item>
)

const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 0 ${spacing.small} ${spacing.small};
  border-bottom: 1px solid ${color.line};
`

const Icon = styled.div`
  width: 32px;
  height: 32px;
  margin-right: ${spacing.small};
  background-color: ${props =>
    props.type === "withdrawal" ? color.negative : color.positive};
  border-radius: 50%;
  text-align: center;
  line-height: 32px;
  color: white;

  &:after {
    content: "${props => (props.type === "withdrawal" ? "-" : "+")}";
  }
`

const Body = styled.div`
  flex-grow: 1;
`

const Amount = styled.div``

TransactionListItem.propTypes = {
  heading: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
}

export default TransactionListItem
