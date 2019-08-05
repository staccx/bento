import React from "react"
import { Heading, Text, Box, theming, i18n } from "@staccx/base"
import { formatCurrency } from "@staccx/formatting"

const Account = ({ account }) => {
  const { availableBalance } = account

  return (
    <Box variant="accountHeading">
      <Heading variant="accountHeadingText" level="3">
        <i18n.Translate i18n="pa-konto" fallback="På konto" />
      </Heading>
      <Text variant="accountHeadingAvailable">
        {formatCurrency(parseInt(availableBalance, 10))}
      </Text>
      <Text variant="accountHeadingSubtext">
        <i18n.Translate
          i18n="ikke-bokforte-renter"
          fallback="Ikke bokførte renter"
          data={account}
        />
      </Text>
    </Box>
  )
}

export const AccountHeading = theming.createVariants(
  { [theming.VARIANT_DEFAULT]: Account },
  "accountHeading"
)
