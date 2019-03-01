import React from "react"
import { Heading, Text, Box, theming } from "@staccx/base"
import { formatCurrency } from "@staccx/formatting"
import { TranslatedText } from "@staccx/i18n"

const Account = ({ account }) => {
  const { availableBalance } = account

  return (
    <Box variant="accountHeading">
      <Heading variant="accountHeadingText" level="3">
        <TranslatedText i18nKey="pa-konto" fallback="På konto" />
      </Heading>
      <Text variant="accountHeadingAvailable">
        {formatCurrency(parseInt(availableBalance, 10))}
      </Text>
      <Text variant="accountHeadingSubtext">
        <TranslatedText
          i18nKey="ikke-bokforte-renter"
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
