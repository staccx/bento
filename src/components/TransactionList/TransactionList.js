import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const TransactionList = ({ children }) => <List>{children}</List>

const List = styled.ol`
  list-style-type: none;
`

TransactionList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default TransactionList
