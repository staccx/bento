import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { font, spacing, color } from "@staccx/theme"
import { Box, List, SplitListItem, Close, Button } from "@staccx/base"
import { formatCurrency } from "@staccx/formatting"
import { BounceIn } from "@staccx/animations"

const AccountInfo = ({ account, toggleInfo }) => {
  return (
    <Outer>
      <Box variant={"accountInfo"}>
        <Header>
          <Heading>Din konto</Heading>
          <Button variant={"invisible"} onClick={() => toggleInfo()}>
            <CloseIcon />
          </Button>
        </Header>
        <List>
          <AccountInfoListItem>
            <strong>KID: </strong>
            <div>{account.accountId}</div>
          </AccountInfoListItem>
          <AccountInfoListItem>
            <strong>Disponibelt beløp: </strong>
            <div>
              {formatCurrency(account.availableBalance, { precision: 2 })}
            </div>
          </AccountInfoListItem>
          <AccountInfoListItem>
            <strong>Bokført saldo: </strong>
            <div>{formatCurrency(account.bookedBalance, { precision: 2 })}</div>
          </AccountInfoListItem>
          <AccountInfoListItem>
            <strong>Ikke bokført rente: </strong>
            <div>
              {formatCurrency(account.accruedInterest, { precision: 2 })}
            </div>
          </AccountInfoListItem>
          <AccountInfoListItem>
            <strong>Ordinær rentesats: </strong>
            <div>{account.effectiveRate}</div>
          </AccountInfoListItem>
        </List>
      </Box>
    </Outer>
  )
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${spacing.small};
`

const CloseIcon = styled(Close)`
  fill: currentColor;
`

const Outer = styled.div`
  position: relative;
  opacity: 0;
  transform: translateY(-12px);
  z-index: 50;
  animation: 0.4s ${BounceIn} cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards 1;
`

const AccountInfoListItem = styled(SplitListItem)`
  padding: 10px 0;
  border-color: ${color("accountInfoBorder")};
`

const Heading = styled.h2`
  font-size: ${font.h3};
`

AccountInfo.propTypes = {
  account: PropTypes.object.isRequired
}

export default AccountInfo
