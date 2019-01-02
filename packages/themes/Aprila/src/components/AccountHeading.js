import React from "react"
import { Heading, Text, Box, theming } from "@staccx/base"
import { formatCurrency } from "@staccx/formatting"
import { TranslatedText } from "@staccx/i18n"

const Account = ({ account }) => {
  const { availableBalance, accruedInterest } = account
  const split = availableBalance ? availableBalance.toString().split(".") : []
  const primary = split.length ? split[0] : ""
  const secondary = split.length > 1 ? split[1] : "00"

  const accruedInterestSplit = accruedInterest
    ? accruedInterest.toString().split(".")
    : []
  const accruedInterestPrimary = accruedInterestSplit.length
    ? accruedInterestSplit[0]
    : ""
  const accruedInterestSecondary =
    accruedInterestSplit.length > 1 ? accruedInterestSplit[1] : "00"

  return (
    <Box variant="accountHeading">
      <Heading variant="accountHeadingText" level="3">
        <TranslatedText i18nKey="AccountHeadingText" fallback="På konto" />
      </Heading>
      <Text variant="accountHeadingAvailable">
        {primary && formatCurrency(parseInt(primary, 10))},{secondary}
      </Text>
      <Text variant="accountHeadingSubtext">
        <TranslatedText
          i18nKey="accruedInterestText"
          fallback="Ikke bokførte renter"
        />
        :{" "}
        {accruedInterestPrimary &&
          formatCurrency(parseInt(accruedInterestPrimary, 10))}
        ,{accruedInterestSecondary}
      </Text>
    </Box>
  )
}

export const AccountHeading = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: Account },
  "accountHeading"
)
