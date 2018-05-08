import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { color, font, fontWeight, spacing } from "@staccx/theme"
import { Box, List, SplitListItem } from "@staccx/base"
import { formatCurrency } from "@staccx/formatting"

const AccountInfo = ({ account }) => {
  return (
    <Box variant={"accountInfo"}>
      <h3>Din konto:</h3>
      <List>
        <SplitListItem>
          <div>KID: </div>
          <div>{account.accountId}</div>
        </SplitListItem>
        <SplitListItem>
          <div>Disponibelt beløp: </div>
          <div>{account.availableBalance}</div>
        </SplitListItem>
        <SplitListItem>
          <div>Bokført saldo: </div>
          <div>{account.bookedBalance}</div>
        </SplitListItem>
        <SplitListItem>
          <div>Ikke bokført rente: </div>
          <div>{account.accruedInterest}</div>
        </SplitListItem>
        <SplitListItem>
          <div>Ordinær rentesats: </div>
          <div>{account.effectiveRate}</div>
        </SplitListItem>
      </List>
    </Box>
  )
}

AccountInfo.propTypes = {
  account: PropTypes.object.isRequired
}

export default AccountInfo
