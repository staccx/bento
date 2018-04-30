import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const TransactionListItem = ({ heading, date, amount }) => (
  <Item>
    {heading}
    <div>{date}</div>
    <div>{amount}</div>
  </Item>
)

const Item = styled.li`
  padding: 0;
`

TransactionListItem.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default TransactionListItem
