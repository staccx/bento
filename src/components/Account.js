import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { font, color } from "@staccx/theme"
import { Box } from "./Box"

const Account = ({ title, balance, earned }) => (
  <Box>
    <Title>{title}</Title>
    <Balance>{balance}</Balance>
    <Earned>{earned}</Earned>
  </Box>
)

const Title = styled.h3`
  font-size: ${font.input};
  font-weight: bold;
  color: ${color.wcag};
`

const Balance = styled.div`
  font-size: ${font.h1};
  font-weight: bold;
  color: ${color.primary};
`

const Earned = styled.div`
  font-size: ${font.input};
  font-weight: bold;
  color: ${color.green};
`

Account.defaultProps = {
  title: "På konto"
}

Account.propTypes = {
  title: PropTypes.string,
  balance: PropTypes.number.isRequired,
  earned: PropTypes.number.isRequired
}

export default Account
