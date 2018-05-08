import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
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
  list-style-type: none;
  margin: 0;
`

TransactionList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default TransactionList
