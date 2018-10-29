import React from "react"
import { Button, Heading, Text, Box } from "@staccx/base"
import { formatCurrency } from "@staccx/formatting"

const Account = ({ account, navigate }) => {
  const { availableBalance } = account
  const split = availableBalance ? availableBalance.toString().split(".") : []
  const primary = split.length ? split[0] : ""
  const secondary = split.length > 1 ? split[1] : ""
  return (
    <Button
      variant="loanBox"
      onClick={navigate ? () => navigate(`/loan/${account.accountId}`) : null}
    >
      <Box variant="relative">
        <Heading variant="accountHeading" level="3">
          Lån
        </Heading>
        <Text variant="loanBalance">
          {primary && formatCurrency(parseInt(primary, 10))}
        </Text>
        {secondary && <Text variant="LoanDecimal">.{secondary}</Text>}
      </Box>
    </Button>
  )
}

export default Account
