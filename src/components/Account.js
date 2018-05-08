import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { inject, observer } from "mobx-react"
import { color, font, fontWeight } from "@staccx/theme"
import { Box } from "@staccx/base"
import { formatCurrency } from "@staccx/formatting"

@inject("account")
@observer
class Account extends React.Component {
  static defaultProps = {
    title: "På konto"
  }

  static propTypes = {
    account: PropTypes.object.isRequired,
    title: PropTypes.string
  }

  render() {
    const { account, title } = this.props
    const { earned, selectedAccount } = account
    if (!selectedAccount) {
      return null
    }
    const { availableBalance } = selectedAccount
    const split = availableBalance ? availableBalance.toString().split(".") : []
    const primary = split.length ? split[0] : ""
    const secondary = split.length > 1 ? split[1] : ""
    return (
      <Box variant="accountBox">
        <Container>
          <Title>{title}</Title>
          <Balance>{primary && formatCurrency(parseInt(primary, 10))}</Balance>
          {secondary && <Decimal>.{secondary}</Decimal>}
          <Earned>
            {earned &&
              "Hvorav renter: " + formatCurrency(earned, { precision: 2 })}
          </Earned>
        </Container>
      </Box>
    )
  }
}

const Title = styled.h3`
  font-size: ${font.input};
  font-weight: ${fontWeight.bold};
  color: ${color("accountHeading")};
`

const Balance = styled.div`
  font-size: ${font("accountBalance")};
  font-weight: ${fontWeight.bold};
  color: ${color("accountBalance")};
  display: inline;
`

const Decimal = styled.span`
  font-size: ${font("accountBalanceDecimals")};
  color: ${color("accountBalance")};
  font-weight: ${fontWeight.bold};
`

const Earned = styled.div`
  font-size: ${font.input};
  font-weight: ${fontWeight.light};
  color: ${color("accountEarned")};
`

const Container = styled.div`
  flex-grow: 1;
`

export default Account
