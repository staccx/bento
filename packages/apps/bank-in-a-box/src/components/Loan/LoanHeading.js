import React from "react"
import { Heading, Text, Box } from "@staccx/base"
import { formatCurrency } from "@staccx/formatting"
import { TranslatedText } from "@staccx/i18n"

const Account = ({ account }) => {
  const { availableBalance } = account
  const split = availableBalance ? availableBalance.toString().split(".") : []
  const primary = split.length ? split[0] : ""
  const secondary = split.length > 1 ? split[1] : ""
  return (
    <Box variant="accountHeading">
      <Heading variant="accountHeadingText" level="3">
        <TranslatedText i18nKey="LoanHeadingText" fallback="Lån" />
      </Heading>
      <Text variant="accountHeadingAvailable">
        <TranslatedText i18nKey="AVAILABLE" fallback="Saldo:" />{" "}
        {primary && formatCurrency(parseInt(primary, 10))},{secondary}
      </Text>
    </Box>
  )
}

export default Account
