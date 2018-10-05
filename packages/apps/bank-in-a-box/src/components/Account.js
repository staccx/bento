import React from "react"
import styled from "styled-components"
import { Button, theming } from "@staccx/base"
import { formatCurrency } from "@staccx/formatting"

const Account = ({ account, navigate }) => {
  const { availableBalance, accruedInterest } = account
  const split = availableBalance ? availableBalance.toString().split(".") : []
  const primary = split.length ? split[0] : ""
  const secondary = split.length > 1 ? split[1] : ""
  return (
    <Button
      variant="accountBox"
      onClick={
        navigate ? () => navigate(`/account/${account.accountId}`) : null
      }
    >
      <Container>
        <Title>
          {account.accountType === "DEPOSIT" && "På konto"}
          {account.accountType === "LOAN" && "Lån"}
        </Title>
        <Balance accountType={account.accountType}>
          {primary && formatCurrency(parseInt(primary, 10))}
        </Balance>
        {secondary && (
          <Decimal accountType={account.accountType}>.{secondary}</Decimal>
        )}
        {account.accountType === "DEPOSIT" && (
          <Earned>
            {accruedInterest &&
              "Hvorav renter: " +
                formatCurrency(accruedInterest, { precision: 2 })}
          </Earned>
        )}
      </Container>
    </Button>
  )
}

const Title = styled.h3`
  font-size: ${theming.font.input};
  font-weight: ${theming.fontWeight.bold};
  color: ${theming.color("accountHeading")};
`

const Balance = styled.div`
  font-size: ${theming.font("accountBalance")};
  font-weight: ${theming.fontWeight.bold};
  color: ${p =>
    p.accountType === "LOAN"
      ? theming.color("accountLoan")
      : theming.color("accountBalance")};
  display: inline;
`

const Decimal = styled.span`
  font-size: ${theming.font("accountBalanceDecimals")};
  color: ${p =>
    p.accountType === "LOAN"
      ? theming.color("accountLoan")
      : theming.color("accountBalance")};
  font-weight: ${theming.fontWeight.bold};
`

const Earned = styled.div`
  font-size: ${theming.font.input};
  font-weight: ${theming.fontWeight.bold};
  color: ${theming.color("accountEarned")};
  line-height: 1;
  margin-bottom: ${theming.spacing.small};
`

const Container = styled.div`
  position: relative;
`

export default Account
