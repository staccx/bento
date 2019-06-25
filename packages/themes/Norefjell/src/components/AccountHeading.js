import React from "react"
import { Heading, Text, Box, theming, i18n } from "@staccx/base"
import { formatCurrency } from "@staccx/formatting"

const Account = ({ account }) => {
  const { availableBalance } = account
  const split = availableBalance ? availableBalance.toString().split(".") : []
  const primary = split.length ? split[0] : ""
  const secondary = split.length > 1 ? split[1] : ""
  return (
    <Box variant="accountHeading">
      <Heading variant="accountHeadingText" level="3">
        <i18n.Translate i18n="AccountHeadingText" fallback="Sparekonto" />
      </Heading>
      <Text variant="accountHeadingAvailable">
        <i18n.Translate i18n="AVAILABLE" fallback="Saldo:" />{" "}
        {primary && formatCurrency(parseInt(primary, 10))},{secondary}
      </Text>
    </Box>
  )
}

export const AccountHeading = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: Account },
  "accountHeading"
)
