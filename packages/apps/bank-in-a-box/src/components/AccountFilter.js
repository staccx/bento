import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { color, fontWeight } from "@staccx/theme"
import { formatCurrency } from "@staccx/formatting"
import { Box, Button, SplitListItem } from "@staccx/base"

const AccountFilter = ({ account, type, duration }) => (
  <Box variant={"accountFilter"}>
    <Box variant={"accountFilterHeader"}>
      <div>{account.accountType === "LOAN" ? "Lån" : "På konto"}</div>
      <div>{formatCurrency(account.availableBalance, { precision: 2 })}</div>
    </Box>
    <div>
      Viser <strong>alle</strong> {type} <strong>{duration}</strong>
    </div>
    <div>
      <Button variant="accountFilter">Endre</Button>
    </div>
  </Box>
)

const Strong = styled.strong`
  font-weight: ${fontWeight.normal};
`
export const AccountInfoListItem = styled(SplitListItem)`
  padding: 10px 0;
  border-color: ${color("accountInfoBorder")};
  color: ${color.wcag};
  ${p =>
    p.emphasize &&
    css`
      &,
      & ${Strong} {
        font-weight: ${fontWeight.bold};
      }
    `};
`

AccountFilter.defaultProps = {
  type: "transaksjoner",
  duration: "siste 30 dager"
}

AccountFilter.propTypes = {
  account: PropTypes.object.isRequired,
  type: PropTypes.string,
  duration: PropTypes.string
}

export default AccountFilter
