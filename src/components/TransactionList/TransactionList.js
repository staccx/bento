import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { spacing } from "@staccx/theme"
import { Button, Box } from "@staccx/base"

const TransactionList = ({ children }) => (
  <Container variant="dashboardBox">
    <List>{children}</List>
    <Button variant="expand">Flere transaksjoner</Button>
  </Container>
)

const Container = styled(Box)`
  padding: 0;
`

const List = styled.ol`
  display: grid;
  grid-auto-flow: row;
  grid-gap: ${spacing.small};
  list-style-type: none;
  padding: ${spacing.small} 0 0;
  margin: 0;
`

TransactionList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default TransactionList
