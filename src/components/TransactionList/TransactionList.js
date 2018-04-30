import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { spacing } from "@staccx/theme"
import { Box } from "../Box"

const TransactionList = ({ children }) => <List>{children}</List>

const List = styled(Box)`
  display: grid;
  grid-auto-flow: row;
  grid-gap: ${spacing.small};
  list-style-type: none;
  padding: ${spacing.small} 0 0;
`

TransactionList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default TransactionList
