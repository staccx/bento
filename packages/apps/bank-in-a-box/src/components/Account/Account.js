import React from "react"
import { Button, Heading, Text, Box } from "@staccx/base"
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
      <Box variant="accountBox">
        <Heading variant="accountHeading" level="3">
          På konto
        </Heading>
        <Text variant="accountBalance">
          {primary && formatCurrency(parseInt(primary, 10))}
        </Text>
        {secondary && <Text variant="accountDecimal">,{secondary}</Text>}
        <Text variant="earned">
          {accruedInterest &&
            "Hvorav renter: " +
              formatCurrency(accruedInterest, { precision: 2 })}
        </Text>
      </Box>
    </Button>
  )
}

export default Account
